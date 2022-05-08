import { useState } from "react";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ButtonSubmit from "../../Buttons/ButtonSubmit";

// Styles
import { Form, Label, Input, Textarea } from "../Form.styled";
import { render } from "@testing-library/react";

const schema = yup.object().shape({
  files: yup.mixed().test("required", "Please select a image file", (value) => {
    return value && value.length;
  }),
});

export default function AddForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [image, setImage] = useState("");

  const convert = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log(data.files[0]);
    if (data.files.length > 0) {
      convert(data.files[0]);
    }
  };

  return (
    <div>
      {image ? <img src={image} width="200" alt="" /> : null}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!watch("files") || watch("files").length === 0 ? (
          <Label>
            Upload
            <input type="file" {...register("files")} />
          </Label>
        ) : (
          <div>{watch("files")[0].name}</div>
        )}
        <ButtonSubmit>Submit</ButtonSubmit>
        {/* </fieldset> */}
      </Form>
    </div>
  );
}
