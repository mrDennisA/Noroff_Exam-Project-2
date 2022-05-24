import { useRef } from "react";
import { useParams } from "react-router-dom";

// API
import { HAIR_EXTENSIONS_COLLECTIONS_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

import Head from "../../../components/common/Head";
import PageLoader from "../../../components/common/PageLoader";
import EditFrom from "../../../components/Form/EditForm";
import Heading from "../../../components/common/Heading";
import DeleteButton from "../../../components/Form/common/DeleteButton";

import { Section } from "../index.styled";

export default function EditProduct() {
  const { id } = useParams();
  const url = HAIR_EXTENSIONS_COLLECTIONS_URL + "/" + id + POPULATE_URL;
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    return (
      <>
        <Head title="Edit Product – Voke Hair" keywords="" description="" />
        <div className="container">
          <div className="wrapper">
            <Section>
              <Heading>Edit Product</Heading>
              <EditFrom data={data.data.attributes} id={id} />
              <DeleteButton id={id} />
            </Section>
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
