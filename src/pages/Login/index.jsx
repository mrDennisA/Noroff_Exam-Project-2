import React from "react";

import Head from "../../components/common/Head";
import LoginForm from "../../components/Form/LoginForm";
import Heading from "../../components/common/Heading";

import { Section } from "./index.styled";

export default function Login() {
  return (
    <>
      <Head title="Login – Voke Hair" keywords="" description="" />
      <div className="container">
        <div className="wrapper">
          <Section>
            <Heading>Login</Heading>
            <LoginForm />
          </Section>
        </div>
      </div>
    </>
  );
}
