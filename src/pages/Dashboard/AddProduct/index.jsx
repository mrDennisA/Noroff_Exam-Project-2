import AddForm from "../../../components/Form/AddForm";
import Heading from "../../../components/common/Heading";
import { Section } from "../index.styled";

export default function AddProduct() {
  return (
    <div className="container">
      <div className="wrapper">
        <Section>
          <Heading>Add Product</Heading>
          <AddForm />
        </Section>
      </div>
    </div>
  );
}
