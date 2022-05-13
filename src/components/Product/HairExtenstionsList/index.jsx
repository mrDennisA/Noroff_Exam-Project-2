import React, { useEffect, useRef, useState } from "react";

// API URL
import { HAIR_EXTENSTIONS_COLORS_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import Heading from "../../common/Heading";
import ProductCard from "../ProductCard";
import Filter from "../../common/Filter";

// Styles
import { Section, HeadingContainer, GridContainer, Grid } from "../List.styled";

const url = HAIR_EXTENSTIONS_COLORS_URL + "?populate=hair_extenstions_collections.cover";

export default function HairExtenstionsList() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  const [activeFilter, setActiveFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    if (!loading) {
      setFilterData(data.data);
    }
  }, [loading, data.data]);

  const filterItem = (filter) => {
    if (!filter) {
      setActiveFilter(false);
      return setFilterData(data.data);
    }

    const newFilter = data.data.filter((item) => {
      return item.id === filter;
    });
    setActiveFilter(filter);
    setFilterData(newFilter);
  };

  function GridList({ data }) {
    return data.map((item) => {
      const data = item.attributes.hair_extenstions_collections.data;
      return (
        <GridContainer key={item.id}>
          <Heading element="h3">{item.attributes.color}</Heading>
          <Grid>
            <ProductCard data={data} />
          </Grid>
        </GridContainer>
      );
    });
  }

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  if (!loading && filterData) {
    return (
      <div className="container">
        <div className="wrapper">
          <Section>
            <HeadingContainer>
              <Heading element="h2">Our Collection</Heading>
              <Filter data={data.data} filterItem={filterItem} setFilterData={setFilterData} activeFilter={activeFilter} />
            </HeadingContainer>
            <GridList data={filterData} />
          </Section>
        </div>
      </div>
    );
  }
}
