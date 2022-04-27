import { useRef } from "react";

// API URL
import { FAQ_PAGE_URL, POPULATE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

import Accordion from "../../components/Accordion";
import Heading from "../../components/Heading";

import { Container } from "./FAQ.styled";

const url = FAQ_PAGE_URL + POPULATE_URL;

export default function FAQ() {
  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    console.log(data);
    const pageTitle = data.data.attributes.pageTitle;
    const AccordionData = data.data.attributes.accordion;

    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Container>
              <Heading>{pageTitle}</Heading>
              <Accordion data={AccordionData} />
            </Container>
          </div>
        </div>
      </>
    );
  }
}
