import { useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// API
import { CARE_COLLECTION_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import ResponsiveImage from "../../../components/common/ResponsiveImage";
import Heading from "../../../components/common/Heading";
import TabGroup from "../../../components/common/Tab";

// Styles
import { Section, ImageContainer, Info } from "./index.styled";

export default function Detail() {
  const { slug } = useParams();
  const url = CARE_COLLECTION_URL + "/" + slug + POPULATE_URL;

  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    // console.log(data.data.attributes.tab);
    const title = data.data.attributes.title;
    const cover = data.data.attributes.cover.data;
    const text = data.data.attributes.text;
    const tabData = data.data.attributes.tab.length > 0 ? data.data.attributes.tab : null;

    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Section>
              <ImageContainer>
                {cover.map((item) => (
                  <ResponsiveImage key={item.id} data={item.attributes} />
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
}
