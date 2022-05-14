import { useRef, Fragment } from "react";

// API URL
import { PARTNER_SALONS_PAGE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import PageLoader from "../../components/common/PageLoader";
import Heading from "../../components/common/Heading";
import { TableContainer, TableHead, TableBody } from "../../components/common/Table";

import { Container, TableGrid } from "./index.styled";

const url = PARTNER_SALONS_PAGE_URL + "?populate=table.countries.partnerSalons";

export default function PartnerSalons() {
  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    const pageTitle = data.data.attributes.pageTitle;
    const tableData = data.data.attributes.table.countries.data;
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Container>
              <Heading>{pageTitle}</Heading>
              <TableGrid>
                {tableData.map((item) => {
                  const countryName = item.attributes.countryName;
                  const partnerSalons = item.attributes.partnerSalons.data;
                  return (
                    <TableContainer key={item.id}>
                      <TableHead data={[countryName, "Address"]} />
                      {partnerSalons.map((item) => {
                        const { name, address } = item.attributes;
                        return <TableBody key={item.id} data={[name, address]} />;
                      })}
                    </TableContainer>
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
