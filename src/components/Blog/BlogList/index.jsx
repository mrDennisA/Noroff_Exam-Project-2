// Components
import Heading from "../../common/Heading";
import BlogCard from "./../BlogCard";

// Styles
import { Section, Grid } from "../BlogList/index.styled";

export default function BlogList(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <Section>
          <Heading element="h2">Voke Wisdom</Heading>
          <Grid>
            <BlogCard data={props.data} />
          </Grid>
        </Section>
      </div>
    </div>
  );
}
