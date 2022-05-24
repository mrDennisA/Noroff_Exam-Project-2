// Components
import Heading from "../../common/Heading";
import ProductCard from "../ProductCard";

// Styles
import { Section, GridContainer, Grid } from "../List.styled";

export default function HairExtenstionsList(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <Section>
          <GridContainer>
            <Heading element="h2">Our Collection</Heading>
            <Grid>
              <ProductCard data={props.data.data} link={true} />
            </Grid>
          </GridContainer>
        </Section>
      </div>
    </div>
  );
}
