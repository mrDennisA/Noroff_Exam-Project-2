import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import ValidationMessage from "../../common/Message/ValidationMessage";
import SubmitMessage from "../../common/Message/SubmitMessage";
import ButtonSubmit from "../../common/Buttons/ButtonSubmit";

// Styles
import { Form, Label, Input, Textarea } from "../Form.styled";
import { useEffect, useState } from "react";

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
  const timeout = useRef(null);

  const timer = 210;
  const delay = 4000;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    setSubmitting(true);

    try {
      console.log("data", data);
    } catch (error) {
      setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
      console.log("error", error);
    } finally {
      // Timer is set as an dalyed exemple of post respons
      setTimeout(() => {
        setRespons({ message: "Contact Request Submitted Successfully", validation: "success" });
        setSubmitting(false);
        reset();
      }, 1000);
    }
  }

  useEffect(() => {
    if (respons) {
      timeout.respons = setTimeout(() => {
        setRespons(null);
      }, delay + timer);
      return () => timeout.respons && clearTimeout(timeout.respons);
    }
  }, [respons]);

  return (
    <>
      <SubmitMessage onClick={() => setRespons(null)} respons={respons} timer={timer} delay={delay} />
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
