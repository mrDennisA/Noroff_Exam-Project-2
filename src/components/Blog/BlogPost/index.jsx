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

// Styles
import { Section } from "./index.styled";

export default function BlogPost() {
  const { slug } = useParams();
  const url = BLOGS_URL + "/" + slug + POPULATE_URL;

  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  function RenderPage() {
    // console.log(data.data);
    const title = data.data.attributes.title;
    const desciption = data.data.attributes.description;
    const richText = data.data.attributes.richText;

    const ReactMarkdownComponents = {
      p: ({ node, children }) => {
        if (node.children[0].tagName === "img") {
          return (
            <div>
              <div>
                <img src={node.children[0].properties.src} alt={node.children[0].properties.alt} />
              </div>
              {node.children[2] && (
                <div>
                  <img src={node.children[2].properties.src} alt={node.children[2].properties.alt} />
                </div>
              )}
            </div>
          );
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
            <strong>{desciption}</strong>
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
