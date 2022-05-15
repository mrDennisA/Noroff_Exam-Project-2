import { Helmet } from "react-helmet";

export default function Head(props) {
  const { title = "", keywords = "", description = "" } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Helmet>
  );
}
