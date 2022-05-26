import React, { useRef } from "react";

// API URL
import { HOME_PAGE_URL, BLOGS_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Layout
import Wrapper from "../../layout/Wrapper";

// Components
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import HeroBanner from "../../components/HeroBanner";
import Article from "../../components/Article";
import BlogList from "../../components/Blog/BlogList";

// Functions
import scrollToElement from "../../services/ScrollToElement";

const url =
  HOME_PAGE_URL +
  "?populate=herobanner.desktop&populate=herobanner.mobil" + // Hero Banner
  "&populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink"; // Article Link

const urlBlog = BLOGS_URL + "?populate=cover"; // Cover

export default function Home() {
  // Scroll To
  const firstArticle = useRef(null);

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);
  const { data: dataBlog, loading: loadingBlog, error: errorBlog } = useFetch(urlBlog, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (errorBlog) {
    console.log(errorBlog);
  }

  function RenderPage() {
    const { herobanner, article } = data.data.attributes;

    return (
      <>
        <Head title="Voke Hair – Hair Extensions" keywords="" description="" />
        <HeroBanner data={herobanner} onClick={() => scrollToElement(firstArticle)} />
        <Wrapper ref={firstArticle}>
          <Article data={article} />
        </Wrapper>
        <BlogList data={dataBlog.data} />
      </>
    );
  }

  return (
    <>
      <PageLoader loading={loading} loadingProduct={loadingBlog} />
      {!loading && !loadingBlog && <RenderPage />}
    </>
  );
}
