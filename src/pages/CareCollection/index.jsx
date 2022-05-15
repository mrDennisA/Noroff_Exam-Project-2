import { useRef } from "react";

// API URL
import { CARE_COLLECTION_PAGE_URL, CARE_COLLECTION_URL, POPULATE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import Article from "../../components/Article";
import ArticleIngredients from "../../components/Article/ArticleIngredients";
import CareCollectionList from "../../components/Product/CareCollectionList";
import Wrapper from "../../layout/Wrapper";

const url =
  CARE_COLLECTION_PAGE_URL +
  "?populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink" + // Article Link
  "&populate=ingredients.cover"; // Ingredients Cover

const urlProduct = CARE_COLLECTION_URL + POPULATE_URL;

export default function CareCollection() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);
  const { data: dataProduct, loading: loadingProduct, error: errorProduct } = useFetch(urlProduct, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (errorProduct) {
    console.log(errorProduct);
  }

  function RenderPage() {
    const articleData = data.data.attributes.article;
    const ingredients = data.data.attributes.ingredients;
    return (
      <>
        <Head title="Voke Care Collection – Voke Hair" keywords="" description="" />
        <Wrapper>
          <Article data={articleData} />
          <ArticleIngredients data={ingredients} />
        </Wrapper>
        <CareCollectionList data={dataProduct} />
      </>
    );
  }

  return (
    <>
      <PageLoader loading={loading} loadingProduct={loadingProduct} />
      {!loading && !loadingProduct && <RenderPage />}
    </>
  );
}
