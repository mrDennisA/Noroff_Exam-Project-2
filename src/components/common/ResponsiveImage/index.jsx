export default function ResponsiveImage(props) {
  const { thumbnail, small, medium, large } = props.data.formats;
  // console.log(data);

  return (
    <img
      srcSet={`
      ${thumbnail ? thumbnail.url + " " + thumbnail.width + "w," : ""}
      ${small ? small.url + " " + small.width + "w," : ""}
      ${medium ? medium.url + " " + medium.width + "w," : ""}
      ${large ? large.url + " " + large.width + "w," : ""}
      ${props.data.url + " " + props.data.width + "w,"}
      `}
      src={props.data.url}
      alt={props.data.alternativeText}
    />
  );
}
