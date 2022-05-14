import React from "react";

import LoginForm from "../../components/Form/LoginForm";
import Heading from "../../components/common/Heading";

import { Section } from "./index.styled";

export default function Login() {
  return (
    <div className="container">
      <div className="wrapper">
        <Section>
          <Heading>Login</Heading>
          <LoginForm />
        </Section>
      </div>
    </div>
  );
}
