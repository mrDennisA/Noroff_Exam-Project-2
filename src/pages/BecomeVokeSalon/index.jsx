import { useRef } from "react";

// Component
import Wrapper from "../../layout/Wrapper";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
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

  if (!loading) {
    console.log(data.data);
    const pageTitle = data.data.attributes.pageTitle;
    const text = data.data.attributes.text;
    const articleData = data.data.attributes.article;

    return (
      <>
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
}
