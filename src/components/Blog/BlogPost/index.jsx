import { useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// API
import { BLOGS_URL, POPULATE_URL } from "../../../services/API";

// Hooks
import { useFetch } from "../../../hooks/useFetch";

// Components
import PageLoader from "../../common/PageLoader";
import Heading from "../../common/Heading";
import ModalImage from "../../common/Modal/ImageModal";

// Styles
import { Section, MediaContainer } from "./index.styled";

export default function BlogPost() {
  const { slug } = useParams();
  const url = BLOGS_URL + "/" + slug + POPULATE_URL;

  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    const { title, description, richText } = data.data.attributes;

    const ReactMarkdownComponents = {
      p: ({ node, children }) => {
        if (node.children[0].tagName === "img") {
          return <MediaContainer>{node.children.map((item, index) => item.tagName === "img" && <ModalImage key={index} data={item} />)}</MediaContainer>;
        }

        // Return default child if it's not an image
        return <p>{children}</p>;
      },
    };

    return (
      <div className="container blog">
        <div className="wrapper">
          <Section>
            <Heading>{title}</Heading>
            <strong>{description}</strong>
            <ReactMarkdown components={ReactMarkdownComponents}>{richText}</ReactMarkdown>
          </Section>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageLoader loading={loading} />
      {!loading && <RenderPage />}
    </>
  );
}
