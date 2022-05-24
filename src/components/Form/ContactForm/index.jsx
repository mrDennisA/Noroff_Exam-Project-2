import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import ValidationMessage from "../../common/Message/ValidationMessage";
import SubmitMessage from "../../common/Message/SubmitMessage";
import ButtonSubmit from "../../common/Buttons/ButtonSubmit";

// Styles
import { Form, Label, Input, Textarea } from "../Form.styled";
// Error text
const schema = yup.object().shape({
  name: yup.string().required("Please enter your Name").min(3, "Minimum of 3 characters"),
  email: yup.string().required("Please enter your Email").email("Must be in a valid email"),
  subject: yup.string().required("Please enter your Subject").min(3, "Minimum of 3 characters"),
  message: yup.string().required("Please type your Message").min(10, "Minimum of 10 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [respons, setRespons] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    setSubmitting(true);
    setRespons(null);

    // Timer is set as an dalyed exemple of post respons
    setTimeout(() => {
      try {
        console.log("data", data);
        setRespons({ message: "Contact Request Submitted Successfully", validation: "success" });
      } catch (error) {
        console.log("error", error);
        setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
      } finally {
        setSubmitting(false);
        reset();
      }
    }, 1000);
  }

  return (
    <>
      <SubmitMessage onClick={() => setRespons(null)} respons={respons} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Label>
            Name:
            <Input {...register("name")} />
            {errors.name && <ValidationMessage>{errors.name.message}</ValidationMessage>}
          </Label>
          <Label>
            Email:
            <Input {...register("email")} />
            {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
          </Label>
          <Label>
            Subject:
            <Input {...register("subject")} />
            {errors.subject && <ValidationMessage>{errors.subject.message}</ValidationMessage>}
          </Label>
          <Label>
            Message:
            <Textarea {...register("message")} />
            {errors.message && <ValidationMessage>{errors.message.message}</ValidationMessage>}
          </Label>
          <ButtonSubmit className={submitting ? "active" : ""}>{submitting ? "Sending..." : "Send"}</ButtonSubmit>
        </fieldset>
      </Form>
    </>
  );
}
