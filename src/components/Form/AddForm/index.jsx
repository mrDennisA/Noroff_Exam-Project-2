import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// API
import { HAIR_EXTENSIONS_COLORS_URL } from "../../../services/API";

// Hooks
import useAxios from "../../../hooks/useAxios";

// Components
import ValidationMessage from "../../common/Message/ValidationMessage";
import SubmitMessage from "../../common/Message/SubmitMessage";
import ButtonSubmit from "../../common/Buttons/ButtonSubmit";
import Dropdown from "../common/Dropdown";
import MediaDropdown from "../common/MediaDropdown";

// Styles
import { Form, Label, Input, Textarea } from "../Form.styled";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  color: yup.string().matches(/^(?!none$)[0-9]+$/, "Please select Color"),
  cover: yup.string().matches(/^(?!none$)[0-9]+$/, "Please select Cover"),
  // files: yup.mixed().test("required", "Please select a image file", (value) => {
  //   return value && value.length;
  // }),
});

export default function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [respons, setRespons] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setRespons(null);
    // console.log(data);

    const dataArray = {
      title: data.title,
      slug: data.title.toLowerCase().replace(/\s/g, "-"),
      info: data.description,
      filter: data.color,
      cover: data.cover,
    };

    try {
      const response = await http.post("/hair-extenstions-collections", { data: dataArray });
      console.log("response", response.data);

      // setRespons({ message: "Product Created Successfully", validation: "success" });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log("error", error);
      setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SubmitMessage onClick={() => setRespons(null)} respons={respons} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Label>
            Title:
            <Input {...register("title")} />
            {errors.title && <ValidationMessage>{errors.title.message}</ValidationMessage>}
          </Label>
          <Label>
            Description:
            <Textarea {...register("description")} />
            {errors.description && <ValidationMessage>{errors.description.message}</ValidationMessage>}
          </Label>
          <Label>
            Select Cover:
            <MediaDropdown register={register} />
            {errors.cover && <ValidationMessage>{errors.cover.message}</ValidationMessage>}
          </Label>
          <Label>
            Select Color:
            <Dropdown register={register} registerName={"color"} url={HAIR_EXTENSIONS_COLORS_URL} />
            {errors.color && <ValidationMessage>{errors.color.message}</ValidationMessage>}
          </Label>
          <ButtonSubmit className={submitting ? "active" : ""}>{submitting ? "Submitting..." : "Submit"}</ButtonSubmit>
        </fieldset>
      </Form>
    </>
  );
}
