import { useRef } from "react";

// API URL
import { HAIR_EXTENSTIONS_PAGE_URL, HAIR_EXTENSTIONS_COLORS_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import Article from "../../components/Article";
import HairExtenstionsList from "../../components/Product/HairExtenstionsList";
import Wrapper from "../../layout/Wrapper";

const url =
  HAIR_EXTENSTIONS_PAGE_URL +
  "?populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink"; // Article Link

const urlProduct = HAIR_EXTENSTIONS_COLORS_URL + "?populate=hair_extenstions_collections.cover";

export default function MasterHairExtenstions() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);
  const { data: dataProduct, loading: loadingProduct, error: errorProduct } = useFetch(urlProduct, isComponentMounted, []);

  if (error || errorProduct) {
    console.log(error || errorProduct);
  }

  function RenderPage() {
    const articleData = data.data.attributes.article;
    return (
      <>
        <Head title="Voke Master Hair Extensions – Voke Hair" keywords="" description="" />
        <Wrapper>
          <Article data={articleData} />
        </Wrapper>
        <HairExtenstionsList data={dataProduct} />
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
