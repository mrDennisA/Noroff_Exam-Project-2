import { useRef } from "react";

// API URL
import { HAIR_EXTENSTIONS_COLLECTIONS_URL, POPULATE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Heading from "../../components/common/Heading";
import ResponsiveImage from "../../components/common/ResponsiveImage";

// Styles
import { Section, ListContainer, Card, Link } from "./index.styled";

const url = HAIR_EXTENSTIONS_COLLECTIONS_URL + POPULATE_URL;

export default function Dashboard() {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }
  if (!loading) {
    // console.log(data);

    return (
      <div className="container">
        <div className="wrapper">
          <Section>
            <Heading>Dashboard</Heading>
            <Link to="add-product">Add Product</Link>
            <ListContainer>
              {data.data.reverse().map((item) => {
                const title = item.attributes.title;
                const cover = item.attributes.cover.data[0].attributes;
                return (
                  <Card key={item.id}>
                    <Link to={`${item.id}`}>
                      <ResponsiveImage data={cover} />
                      <span>{title}</span>
                    </Link>
                  </Card>
                );
              })}
            </ListContainer>
          </Section>
        </div>
      </div>
    );
  }
}
