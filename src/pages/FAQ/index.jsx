import { useRef } from "react";

// API URL
import { FAQ_PAGE_URL, POPULATE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Component
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import Accordion from "../../components/common/Accordion";
import Heading from "../../components/common/Heading";

import { Container } from "./index.styled";

const url = FAQ_PAGE_URL + POPULATE_URL;

export default function FAQ() {
  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    const pageTitle = data.data.attributes.pageTitle;
    const AccordionData = data.data.attributes.accordion;
    return (
      <>
        <Head title="FAQ – Voke Hair" keywords="" description="" />;
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

  return (
    <>
      <PageLoader loading={loading} />
      {!loading && <RenderPage />}
    </>
  );
}
