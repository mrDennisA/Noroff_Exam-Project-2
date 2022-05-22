// Components
import Heading from "../../common/Heading";
import BlogPostCard from "./../BlogCard";

// Styles
import { Section, Grid } from "../BlogList/index.styled";

export default function BlogList({ data }) {
  return (
    <div className="container">
      <div className="wrapper">
        <Section>
          <Heading element="h2">Voke Wisdom</Heading>
          <Grid>
            <BlogPostCard data={data.data} />
          </Grid>
        </Section>
      </div>
    </div>
  );
}
