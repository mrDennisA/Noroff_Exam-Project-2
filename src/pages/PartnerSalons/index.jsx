import React, { useRef, useState } from "react";

// API URL
import { PARTNER_SALONS_PAGE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Head from "../../components/common/Head";
import PageLoader from "../../components/common/PageLoader";
import Heading from "../../components/common/Heading";
import { TableContainer, TableHead, TableBody } from "../../components/common/Table";
import Pagination from "../../components/common/Pagination";

import { Container, TableGrid, TableContent } from "./index.styled";

const url = PARTNER_SALONS_PAGE_URL + "?populate=table.countries.partnerSalons";

export default function PartnerSalons() {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    // Change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const pageTitle = data.data.attributes.pageTitle;
    const tableData = data.data.attributes.table.countries.data;

    return (
      <>
        <Head title="Partner Salons – Voke Hair" keywords="" description="" />;
        <div className="container">
          <div className="wrapper">
            <Container>
              <Heading>{pageTitle}</Heading>
              <TableGrid>
                {tableData.map((item) => {
                  const countryName = item.attributes.countryName;
                  const partnerSalons = item.attributes.partnerSalons.data;

                  // Get current items
                  const indexOfLastItem = currentPage * itemsPerPage;
                  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
                  const currentItems = partnerSalons.slice(indexOfFirstItem, indexOfLastItem);
                  const totalItems = partnerSalons.length;

                  return (
                    <TableContent key={item.id}>
                      <TableContainer>
                        <TableHead data={[countryName, "Address"]} />
                        {currentItems.map((item) => {
                          const { name, address } = item.attributes;
                          return <TableBody key={item.id} data={[name, address]} />;
                        })}
                      </TableContainer>
                      <Pagination data={{ itemsPerPage, totalItems, paginate, currentPage }} />
                    </TableContent>
                  );
                })}
              </TableGrid>
            </Container>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageLoader loading={loading} />
      {!loading && <RenderPage />}
    </>
  );
}
