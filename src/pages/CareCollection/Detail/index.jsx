import { useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// API
import { CARE_COLLECTION_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import Head from "../../../components/common/Head";
import PageLoader from "../../../components/common/PageLoader";
import Heading from "../../../components/common/Heading";
import TabGroup from "../../../components/common/Tab";
import ImageModal from "../../../components/common/Modal/ImageModal";

// Styles
import { Section, ImageContainer, Info } from "./index.styled";

export default function Detail() {
  const { slug } = useParams();
  const url = CARE_COLLECTION_URL + "/" + slug + POPULATE_URL;

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    const title = data.data.attributes.title;
    const cover = data.data.attributes.cover.data;
    const text = data.data.attributes.text;
    const tabData = data.data.attributes.tab.length > 0 ? data.data.attributes.tab : null;

    return (
      <>
        <Head title={data.data.attributes.title + " – Voke Hair"} keywords="" description="" />;
        <div className="container">
          <div className="wrapper">
            <Section>
              <ImageContainer>
                {cover.map((item) => (
                  <ImageModal key={item.id} data={item} />
                ))}
              </ImageContainer>
              <Heading>{title}</Heading>
              <Info>
                <ReactMarkdown>{text}</ReactMarkdown>
              </Info>
              {tabData && <TabGroup data={tabData} />}
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
