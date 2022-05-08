import { useRef } from "react";

// API URL
import { CARE_COLLECTION_PAGE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components

import Article from "../../components/Article";
import ArticleIngredients from "../../components/Article/ArticleIngredients";
import CareCollectionList from "../../components/Product/CareCollectionList";
import Wrapper from "../../layout/Wrapper";

const url =
  CARE_COLLECTION_PAGE_URL +
  "?populate=article.imagegroup.image" + // Article
  "&populate=article.pageLink" + // Article Link
  "&populate=ingredients.cover"; // Ingredients Cover

export default function CareCollection() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    // console.log(data.data.attributes);

    const articleData = data.data.attributes.article;
    const ingredients = data.data.attributes.ingredients;

    return (
      <>
        <Wrapper>
          <Article data={articleData} />
          <ArticleIngredients data={ingredients} />
        </Wrapper>
        <CareCollectionList />
      </>
    );
  }
}
