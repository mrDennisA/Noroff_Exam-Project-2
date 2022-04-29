import { useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// API
import { BLOGS_URL, POPULATE_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Heading from "../Heading";
// import ResponsiveImage from "../ResponsiveImage";

export default function BlogPost() {
  const { slug } = useParams();
  const url = BLOGS_URL + "/" + slug + POPULATE_URL;

  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    // console.log(data.data.attributes);
    const title = data.data.attributes.title;
    // const cover = data.data.attributes.cover.data.attributes.formats;
    const desciption = data.data.attributes.description;
    const richText = data.data.attributes.richText;
    return (
      <>
        <Heading>{title}</Heading>
        {/* <ResponsiveImage data={cover} /> */}
        <p>{desciption}</p>
        <ReactMarkdown>{richText}</ReactMarkdown>
      </>
    );
  }
}
