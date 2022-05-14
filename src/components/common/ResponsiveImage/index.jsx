export default function ResponsiveImage({ data }) {
  const { thumbnail, small, medium, large } = data.formats;
  // console.log(data);

  return (
    <img
      srcSet={`
      ${thumbnail ? thumbnail.url + " " + thumbnail.width + "w," : ""}
      ${small ? small.url + " " + small.width + "w," : ""}
      ${medium ? medium.url + " " + medium.width + "w," : ""}
      ${large ? large.url + " " + large.width + "w," : ""}
      ${data.url + " " + data.width + "w,"}
      `}
      src={data.url}
      alt={data.alternativeText}
    />
  );
}
