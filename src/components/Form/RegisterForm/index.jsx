import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import ValidationMessage from "../../common/Message/ValidationMessage";
import SubmitMessage from "../../common/Message/SubmitMessage";
import ButtonSubmit from "../../common/Buttons/ButtonSubmit";

// Styles
import { Form, Label, Input } from "../Form.styled";

// Error text
const phoneNumberRegex = RegExp(/^((\+|0{0,2})([0-9]){1,3})?[-.●\s]?\(?([0-9]{2,3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/);
const ziCodeRegex = RegExp(/^[0-9]{4,5}$/);

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your First Name").min(3, "Minimum of 3 characters"),
  lastName: yup.string().required("Please enter your Last Name").min(3, "Minimum of 3 characters"),
  email: yup.string().required("Please enter your Email Address").email("Invalid Email"),
  phoneNumber: yup.string().required("Please enter your Phone Number").matches(phoneNumberRegex, "Invalid Phone Number"),
  salonName: yup.string().required("Please enter your Salon Name").min(3, "Minimum of 3 characters"),
  orgNumber: yup.string().required("Please enter your Organization Number").min(10, "minimum of 10 characters"),
  address: yup.string().required("Please enter your Address").min(3, "Minimum of 3 characters"),
  zipCode: yup.string().trim().required("Please enter your Zip Code").matches(ziCodeRegex, "Minimum of 4 characters"),
  city: yup.string().required("Please enter your City").min(3, "Minimum of 3 characters"),
});

export default function RegisterForm() {
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
        setRespons({ message: "Register Request Submitted Successfully", validation: "success" });
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
      <Form className="register" onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <div>
            <Label>
              First Name:
              <Input {...register("firstName")} />
              {errors.firstName && <ValidationMessage>{errors.firstName.message}</ValidationMessage>}
            </Label>
            <Label>
              Last name:
              <Input {...register("lastName")} />
              {errors.lastName && <ValidationMessage>{errors.lastName.message}</ValidationMessage>}
            </Label>
          </div>
          <div>
            <Label>
              Email:
              <Input {...register("email")} />
              {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
            </Label>
            <Label>
              Phone number:
              <Input {...register("phoneNumber")} />
              {errors.phoneNumber && <ValidationMessage>{errors.phoneNumber.message}</ValidationMessage>}
            </Label>
          </div>
          <div>
            <Label>
              Name of your salon:
              <Input {...register("salonName")} />
              {errors.salonName && <ValidationMessage>{errors.salonName.message}</ValidationMessage>}
            </Label>
            <Label>
              Organization number:
              <Input {...register("orgNumber")} />
              {errors.orgNumber && <ValidationMessage>{errors.orgNumber.message}</ValidationMessage>}
            </Label>
          </div>
          <Label>
            Address:
            <Input {...register("address")} />
            {errors.address && <ValidationMessage>{errors.address.message}</ValidationMessage>}
          </Label>
          <div>
            <Label>
              Zip code:
              <Input {...register("zipCode")} />
              {errors.zipCode && <ValidationMessage>{errors.zipCode.message}</ValidationMessage>}
            </Label>
            <Label>
              City:
              <Input {...register("city")} />
              {errors.city && <ValidationMessage>{errors.city.message}</ValidationMessage>}
            </Label>
          </div>
          <ButtonSubmit className={submitting ? "active" : ""}>{submitting ? "Sending..." : "Send"}</ButtonSubmit>
        </fieldset>
      </Form>
    </>
  );
}
