import { useRef } from "react";

// API URL
import { HAIR_EXTENSTIONS_COLLECTIONS_URL, POPULATE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Heading from "../Heading";
import ProductCard from "../ProductCard/ProductCard";

// Styles
import { Section, GridContainer, Grid } from "./List.styled";

const url = HAIR_EXTENSTIONS_COLLECTIONS_URL + POPULATE_URL;

export default function HairExtenstionsList() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const ombre = data.data.filter((item) => item.attributes.filter.data.attributes.slug === "ombre");
    const blonde = data.data.filter((item) => item.attributes.filter.data.attributes.slug === "blonde");
    const darkBlondeToDark = data.data.filter((item) => item.attributes.filter.data.attributes.slug === "dark-blonde-to-dark");
    // console.log(ombre);
    return (
      <div className="container">
        <div className="wrapper">
          <Section>
            <GridContainer>
              <Heading element="h2">Our Collection</Heading>
              <Heading element="h3">Ombre</Heading>
              <Grid>
                <ProductCard data={ombre} />
              </Grid>
            </GridContainer>
            <GridContainer>
              <Heading element="h3">Blonde</Heading>
              <Grid>
                <ProductCard data={blonde} />
              </Grid>
            </GridContainer>
            <GridContainer>
              <Heading element="h3">Dark Blonde To Dark</Heading>
              <Grid>
                <ProductCard data={darkBlondeToDark} />
              </Grid>
            </GridContainer>
          </Section>
        </div>
      </div>
    );
  }
}
