import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import ValidationError from "../Error/ValidationError";
import ButtonSubmit from "../Buttons/ButtonSubmit";

// Styles
import { Form, Label, Input } from "./Form.styled";

// Error text
const phoneNumberRegex = RegExp(/^((\+|0{0,2})([0-9]){1,3})?[-.●\s]?\(?([0-9]{2,3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/);
const ziCodeRegex = RegExp(/^[0-9]{4,5}$/);

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your First Name").min(3, "Minimum of 3 characters"),
  lastName: yup.string().required("Please enter your Last Name").min(3, "Minimum of 3 characters"),
  email: yup.string().required("Please enter your Email").email("Invalid Email"),

  phoneNumber: yup.string().required("Please enter your Phone number").matches(phoneNumberRegex, "Invalid Phone Number"),
  salonName: yup.string().required("Please enter your Salon Name").min(3, "minimum of 3 characters"),
  orgNumber: yup.string().required("Please enter your Organization Number").min(10, "minimum of 10 characters"),
  address: yup.string().required("Please enter your Address").min(3, "minimum of 3 characters"),
  zipCode: yup.string().trim().required("Please enter your Zip Code").matches(ziCodeRegex, "minimum of 4 characters"),
  city: yup.string().required("Please enter your City").min(3, "minimum of 3 characters"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <Form className="register" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>
          First Name:
          <Input {...register("firstName")} />
          {errors.firstName && <ValidationError>{errors.firstName.message}</ValidationError>}
        </Label>
        <Label>
          Last name:
          <Input {...register("lastName")} />
          {errors.lastName && <ValidationError>{errors.lastName.message}</ValidationError>}
        </Label>
      </div>
      <div>
        <Label>
          Email:
          <Input {...register("email")} />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
        </Label>
        <Label>
          Phone number:
          <Input {...register("phoneNumber")} />
          {errors.phoneNumber && <ValidationError>{errors.phoneNumber.message}</ValidationError>}
        </Label>
      </div>
      <div>
        <Label>
          Name of your salon:
          <Input {...register("salonName")} />
          {errors.salonName && <ValidationError>{errors.salonName.message}</ValidationError>}
        </Label>
        <Label>
          Organization number:
          <Input {...register("orgNumber")} />
          {errors.orgNumber && <ValidationError>{errors.orgNumber.message}</ValidationError>}
        </Label>
      </div>

      <Label>
        Address:
        <Input {...register("address")} />
        {errors.address && <ValidationError>{errors.address.message}</ValidationError>}
      </Label>
      <div>
        <Label>
          Zip code:
          <Input {...register("zipCode")} />
          {errors.zipCode && <ValidationError>{errors.zipCode.message}</ValidationError>}
        </Label>
        <Label>
          City:
          <Input {...register("city")} />
          {errors.city && <ValidationError>{errors.city.message}</ValidationError>}
        </Label>
      </div>

      <ButtonSubmit>Send</ButtonSubmit>
    </Form>
  );
}
