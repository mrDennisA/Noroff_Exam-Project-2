import AccordionItem from "./AccordionItem";
import { Section } from "./index.styled";

export default function Accordion({ data }) {
  return (
    <Section>
      {data.map((item, index) => (
        <AccordionItem key={index} data={item} />
      ))}
    </Section>
  );
}
