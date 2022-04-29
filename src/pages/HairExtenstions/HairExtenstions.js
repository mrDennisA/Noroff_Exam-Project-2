import { useRef } from "react";

// API URL
import { HAIR_EXTENSTIONS_PAGE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Article from "../../components/Article/Article";
import HairExtenstionsList from "../../components/Product/HairExtenstionsList";
import ScrollToTop from "../../components/Buttons/ScrollToTop";
import Wrapper from "../../layout/Wrapper";

const url =
  HAIR_EXTENSTIONS_PAGE_URL +
  "?populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink"; // Article Link

export default function MasterHairExtenstions() {
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
        </Wrapper>
        <HairExtenstionsList />
        <ScrollToTop />
      </>
    );
  }
}
