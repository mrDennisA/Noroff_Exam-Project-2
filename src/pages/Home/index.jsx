import { useRef } from "react";

// API URL
import { HOME_PAGE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Layout
import Wrapper from "../../layout/Wrapper";

// Components
import HeroBanner from "../../components/HeroBanner";
import Article from "../../components/Article";
import BlogList from "../../components/Blog/BlogList";

// Functions
import scrollToElement from "../../utils/ScrollToElement";

const url =
  HOME_PAGE_URL +
  "?populate=herobanner.desktop&populate=herobanner.mobil" + // Hero Banner
  "&populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink"; // Article Link

export default function Home() {
  // Scroll To
  const firstArticle = useRef(null);

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const { herobanner, article } = data.data.attributes;

    return (
      <>
        <HeroBanner data={herobanner} onClick={() => scrollToElement(firstArticle)} />
        <Wrapper ref={firstArticle}>
          <Article data={article} />
        </Wrapper>
        <BlogList />
      </>
    );
  }
}
