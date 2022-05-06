import { useState, useRef } from "react";

import Heading from "../../Heading";
import Card from "./Card";
import Pagination from "./Pagination";

import { useTokenFetch } from "../../../hooks/useTokenFetch";

import { Section, Container } from "./index.styled";

export default function Media() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useTokenFetch("/upload/files", isComponentMounted, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  if (!loading) {
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalItems = data.length;

    // Change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <Section>
        <Heading element="h3">Media Library</Heading>
        <Container>
          {currentItems.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </Container>

        <Pagination data={{ itemsPerPage, totalItems, paginate, currentPage }} />
      </Section>
    );
  }
}
