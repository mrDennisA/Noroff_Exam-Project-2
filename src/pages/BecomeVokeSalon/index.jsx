import { useRef } from "react";

// Component
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import Wrapper from "../../layout/Wrapper";
import Article from "../../components/Article";
import Heading from "../../components/common/Heading";
import RegisterForm from "../../components/Form/RegisterForm";

// Styles
import { Section } from "./index.styled";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// API URL
import { BECOME_VOKE_SALON_PAGE_URL } from "../../services/API";

const url =
  BECOME_VOKE_SALON_PAGE_URL +
  "?populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink"; // Article Link

export default function BecomeVokeSalon() {
  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    const pageTitle = data.data.attributes.pageTitle;
    const text = data.data.attributes.text;
    const articleData = data.data.attributes.article;

    return (
      <>
        <Head title="Become a Voke Salon – Voke Hair" keywords="" description="" />
        <Wrapper>
          <Article data={articleData} />
        </Wrapper>
        <Section>
          <div>
            <Heading element="h2">{pageTitle}</Heading>
            <p>{text}</p>
          </div>
          <RegisterForm />
        </Section>
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
