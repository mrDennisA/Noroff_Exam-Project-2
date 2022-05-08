import { useState } from "react";
import useAxios from "../../../hooks/useAxios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ButtonSubmit from "../../common/Buttons/ButtonSubmit";

import MediaDropdown from "../common/MediaDropdown";

// Styles
import { Form, Label, Input, Textarea, Select } from "../Form.styled";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Title is required"),
  color: yup.string().matches(/^(?!select$)[0-9]+$/, "Please select Option"),
  cover: yup.string(),
  // files: yup.mixed().test("required", "Please select a image file", (value) => {
  //   return value && value.length;
  // }),
});

export default function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  // const history = useHistory();
  const http = useAxios();

  const {
    register,
    watch,
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
      filter: 1,
      cover: parseInt(data.cover),
    };
    try {
      const response = await http.post("/hair-extenstions-collections", { data: dataArray });

      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      // setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Label>
            Title:
            <Input {...register("title")} />
          </Label>
          <Label>
            Description:
            <Textarea {...register("description")} />
          </Label>
          <Label>
            Color:
            <Select {...register("color")}>
              <option defaultValue="select">Select Option</option>
              <option value={1}>Color 1</option>
              <option value={2}>Color 2</option>
            </Select>
          </Label>
          <div>
            <MediaDropdown register={register} />
          </div>
          <ButtonSubmit>{submitting ? "Submitting..." : "Submit"}</ButtonSubmit>
        </fieldset>
      </Form>
    </div>
  );
}
