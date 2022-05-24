import { useState } from "react";
import useAxios from "../../../hooks/useAxios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// API
import { HAIR_EXTENSIONS_COLORS_URL } from "../../../services/API";

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

export default function EditForm(props) {
  const [submitting, setSubmitting] = useState(false);
  const [respons, setRespons] = useState(null);

  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setRespons(null);

    const dataArray = {
      title: data.title,
      slug: data.title.toLowerCase().replace(/\s/g, "-"),
      info: data.description,
      filter: data.color,
      cover: data.cover,
    };

    try {
      const response = await http.put(`/hair-extenstions-collections/${props.id}`, { data: dataArray });
      console.log("response", response.data);
      setRespons({ message: "Product Updated Successfully", validation: "success" });
    } catch (error) {
      console.log("error", error);
      setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  const { title, info } = props.data;
  const coverID = props.data.cover.data[0].id;
  const colorID = props.data.filter.data.id;

  return (
    <>
      <SubmitMessage onClick={() => setRespons(null)} respons={respons} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Label>
            Title:
            <Input {...register("title")} defaultValue={title} />
            {errors.title && <ValidationMessage>{errors.title.message}</ValidationMessage>}
          </Label>
          <Label>
            Description:
            <Textarea {...register("description")} defaultValue={info} />
            {errors.description && <ValidationMessage>{errors.description.message}</ValidationMessage>}
          </Label>
          <Label>
            Select Cover:
            <MediaDropdown register={register} defaultValue={coverID} />
            {errors.cover && <ValidationMessage>{errors.cover.message}</ValidationMessage>}
          </Label>
          <Label>
            Select Color:
            <Dropdown register={register} defaultValue={colorID} registerName={"color"} url={HAIR_EXTENSIONS_COLORS_URL} />
            {errors.color && <ValidationMessage>{errors.color.message}</ValidationMessage>}
          </Label>
          <ButtonSubmit className={submitting ? "active" : ""}>{submitting ? "Submitting..." : "Submit"}</ButtonSubmit>
        </fieldset>
      </Form>
    </>
  );
}
