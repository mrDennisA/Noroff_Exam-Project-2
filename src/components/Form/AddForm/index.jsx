import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// API
import { HAIR_EXTENSTIONS_COLORS_URL } from "../../../services/API";

// Hooks
import useAxios from "../../../hooks/useAxios";

// Components
import ValidationError from "../../common/Error/ValidationError";
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
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

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
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <ValidationError>{serverError}</ValidationError>}
      <fieldset disabled={submitting}>
        <Label>
          Title:
          <Input {...register("title")} />
          {errors.title && <ValidationError>{errors.title.message}</ValidationError>}
        </Label>
        <Label>
          Description:
          <Textarea {...register("description")} />
          {errors.description && <ValidationError>{errors.description.message}</ValidationError>}
        </Label>
        <Label>
          Select Cover:
          <MediaDropdown register={register} />
          {errors.cover && <ValidationError>{errors.cover.message}</ValidationError>}
        </Label>
        <Label>
          Select Color:
          <Dropdown register={register} registerName={"color"} url={HAIR_EXTENSTIONS_COLORS_URL} />
          {errors.color && <ValidationError>{errors.color.message}</ValidationError>}
        </Label>
        <ButtonSubmit className={submitting ? "active" : ""}>{submitting ? "Submitting..." : "Submit"}</ButtonSubmit>
      </fieldset>
    </Form>
  );
}
