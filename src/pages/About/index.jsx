import { useRef } from "react";

// API URL
import { ABOUT_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import Wrapper from "../../layout/Wrapper";
import Article from "../../components/Article";

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

  function RenderPage() {
    const articleData = data.data.attributes.article;
    return (
      <>
        <Head title="About – Voke Hair" keywords="" description="" />
        <Wrapper>
          <Article data={articleData} />
        </Wrapper>
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
