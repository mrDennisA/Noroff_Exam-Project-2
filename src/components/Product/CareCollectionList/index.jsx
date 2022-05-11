import { useRef } from "react";

// API URL
import { CARE_COLLECTION_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import Heading from "../../common/Heading";
import ProductCard from "../ProductCard";

// Styles
import { Section, GridContainer, Grid } from "../List.styled";

const url = CARE_COLLECTION_URL + POPULATE_URL;

export default function HairExtenstionsList() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (!loading) {
    // console.log(data);
    return (
      <div className="container">
        <div className="wrapper">
          <Section>
            <GridContainer>
              <Heading element="h2">Our Collection</Heading>
              <Grid>
                <ProductCard data={data.data} link={true} />
              </Grid>
            </GridContainer>
          </Section>
        </div>
      </div>
    );
  }
}
