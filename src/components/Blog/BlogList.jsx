import { useRef } from "react";

// API URL
import { BLOGS_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Heading from "../Heading";
import BlogPostCard from "./BlogCard";

// Styles
import { Section, Grid } from "./BlogList.styled";

const url = BLOGS_URL + "?populate=cover"; // Cover
//   "&populate=article.link"; // Article Link

export default function BlogList() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (!loading) {
    const blogsData = data.data;

    return (
      <div className="container">
        <div className="wrapper">
          <Section>
            <Heading element="h2">Voke Wisdom</Heading>
            <Grid>
              <BlogPostCard data={blogsData} />
            </Grid>
          </Section>
        </div>
      </div>
    );
  }
}
