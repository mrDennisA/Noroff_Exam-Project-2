export default function ResponsiveImage({ data }) {
  const { thumbnail, small, medium, large } = data;
  const url = "http://localhost:1337";
  return (
    <img
      src={url + thumbnail.url}
      srcSet={`
      ${small ? url + small.url + " " + small.width + "w," : ""}
      ${medium ? url + medium.url + " " + medium.width + "w," : ""}
      ${large ? url + large.url + " " + large.width + "w," : ""}
      `}
      alt=""
    />
  );
}
