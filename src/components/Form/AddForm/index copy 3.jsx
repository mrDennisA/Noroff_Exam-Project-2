import { useState } from "react";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ButtonSubmit from "../../Buttons/ButtonSubmit";
import Modal from "../../Modal";
import Media from "../../Dashboard/Media";

// Styles
import { Cover } from "./index.styled";
import { Form, Label, Input, Textarea } from "../Form.styled";
import { render } from "@testing-library/react";

const schema = yup.object().shape({
  files: yup.mixed().test("required", "Please select a image file", (value) => {
    return value && value.length;
  }),
});

export default function AddForm() {
  const [display, setDisplay] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  // const history = useHistory();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const formData = new FormData();
    formData.append("files", data.files[0]);

    // Array.from(data.files).forEach((image) => {
    //   formData.append("files", image);
    // });

    try {
      const response = await axios.post("http://localhost:1337/api/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      // setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!false);
  };

  return (
    <div>
      <section>
        <div>Cover</div>
        <Cover>
          <button onClick={() => setDisplay(true)}>
            <span>Click to select an asset</span>
          </button>
        </Cover>
      </section>
      {/* <Media /> */}
      {/* <Modal onClose={() => setDisplay(false)} display={display} title="Upload assets">
        <Media />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={submitting}>
            <Label>
              Upload
              <input type="file" {...register("files")} />
            </Label>
            <ButtonSubmit>{submitting ? "Submitting..." : "Submit"}</ButtonSubmit>{" "}
          </fieldset>
        </Form>
      </Modal> */}
    </div>
  );
}
