import { useRef } from "react";

// API URL
import { ABOUT_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Wrapper from "../../layout/Wrapper";
import Article from "../../components/Article/Article";
import ScrollToTop from "../../components/Buttons/ScrollToTop";

const url =
  ABOUT_URL +
  "?populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink"; // Article Link

export default function About() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const articleData = data.data.attributes.article;

    return (
      <>
        <Wrapper>
          <Article data={articleData} />
          <ScrollToTop />
        </Wrapper>
      </>
    );
  }
}
