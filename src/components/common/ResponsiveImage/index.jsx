export default function ResponsiveImage({ data }) {
  const { thumbnail, small, medium, large } = data;

  return (
    <img
      src={thumbnail.url}
      srcSet={`
      ${small ? small.url + " " + small.width + "w," : ""}
      ${medium ? medium.url + " " + medium.width + "w," : ""}
      ${large ? large.url + " " + large.width + "w," : ""}
      `}
      alt=""
    />
  );
}
