import Head from "../../../components/common/Head";
import AddForm from "../../../components/Form/AddForm";
import Heading from "../../../components/common/Heading";
import { Section } from "../index.styled";

export default function AddProduct() {
  return (
    <>
      <Head title="Add Product – Voke Hair" keywords="" description="" />
      <div className="container">
        <div className="wrapper">
          <Section>
            <Heading>Add Product</Heading>
            <AddForm />
          </Section>
        </div>
      </div>
    </>
  );
}
