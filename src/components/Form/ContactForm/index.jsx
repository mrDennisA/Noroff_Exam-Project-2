import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import ValidationError from "../../common/Error/ValidationError";
import ButtonSubmit from "../../common/Buttons/ButtonSubmit";

// Styles
import { Form, Label, Input, Textarea } from "../Form.styled";

// Error text
const schema = yup.object().shape({
  name: yup.string().required("Please enter your Name").min(3, "Minimum of 3 characters"),
  email: yup.string().required("Please enter your Email").email("Must be in a valid email"),
  subject: yup.string().required("Please enter your Subject").min(3, "Minimum of 3 characters"),
  message: yup.string().required("Please type your Message").min(10, "minimum of 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name:
        <Input {...register("name")} />
        {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
      </Label>
      <Label>
        Email:
        <Input {...register("email")} />
        {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
      </Label>
      <Label>
        Subject:
        <Input {...register("subject")} />
        {errors.subject && <ValidationError>{errors.subject.message}</ValidationError>}
      </Label>
      <Label>
        Message:
        <Textarea {...register("message")} />
        {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
      </Label>
      <ButtonSubmit>Send</ButtonSubmit>
    </Form>
  );
}
