import EditFrom from "../../../components/Form/EditForm";
import Heading from "../../../components/common/Heading";

import { Section } from "../index.styled";

export default function EditProduct() {
  return (
    <div className="container">
      <div className="wrapper">
        <Section>
          <Heading>Edit Product</Heading>
          <EditFrom />
        </Section>
      </div>
    </div>
  );
}
