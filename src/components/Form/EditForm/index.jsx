import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// API
import { HAIR_EXTENSIONS_COLLECTIONS_URL, HAIR_EXTENSIONS_COLORS_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import ValidationMessage from "../../common/Message/ValidationMessage";
import ButtonSubmit from "../../common/Buttons/ButtonSubmit";
import Dropdown from "../common/Dropdown";
import MediaDropdown from "../common/MediaDropdown";
import DeleteButton from "../common/DeleteButton";

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

export default function EditForm() {
  const { id } = useParams();
  const url = HAIR_EXTENSIONS_COLLECTIONS_URL + "/" + id + POPULATE_URL;

  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

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
      const response = await http.put(`/hair-extenstions-collections/${id}`, { data: dataArray });
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const title = data.data.attributes.title;
    const info = data.data.attributes.info;
    const coverID = data.data.attributes.cover.data[0].id;
    const colorID = data.data.attributes.filter.data.id;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <ValidationMessage>{serverError}</ValidationMessage>}
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
          <DeleteButton id={id} />
        </fieldset>
      </Form>
    );
  }
}
