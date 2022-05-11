import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// API
import { HAIR_EXTENSTIONS_COLLECTIONS_URL, HAIR_EXTENSTIONS_COLORS_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import ValidationError from "../../common/Error/ValidationError";
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
  const url = HAIR_EXTENSTIONS_COLLECTIONS_URL + "/" + id + POPULATE_URL;

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
        {serverError && <ValidationError>{serverError}</ValidationError>}
        <fieldset disabled={submitting}>
          <Label>
            Title:
            <Input {...register("title")} defaultValue={title} />
            {errors.title && <ValidationError>{errors.title.message}</ValidationError>}
          </Label>
          <Label>
            Description:
            <Textarea {...register("description")} defaultValue={info} />
            {errors.description && <ValidationError>{errors.description.message}</ValidationError>}
          </Label>
          <Label>
            Select Cover:
            <MediaDropdown register={register} defaultValue={coverID} />
            {errors.cover && <ValidationError>{errors.cover.message}</ValidationError>}
          </Label>
          <Label>
            Select Color:
            <Dropdown register={register} defaultValue={colorID} registerName={"color"} url={HAIR_EXTENSTIONS_COLORS_URL} />
            {errors.color && <ValidationError>{errors.color.message}</ValidationError>}
          </Label>
          <ButtonSubmit className={submitting ? "active" : ""}>{submitting ? "Submitting..." : "Submit"}</ButtonSubmit>
          <DeleteButton id={id} />
        </fieldset>
      </Form>
    );
  }
}
