import { useState, useRef } from "react";

import { useTokenFetch } from "./hooks/useTokenFetch";

import ResponsiveImage from "../../Media/ResponsiveImage";

export default function Media({ register }) {
  const [display, setDisplay] = useState(false);

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useTokenFetch("/upload/files", isComponentMounted, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const onChange = (item) => {
      if (!isNaN(item.target.value)) {
        data.map((image) => parseFloat(item.target.value) === image.id && setDisplay(image));
      } else {
        setDisplay(false);
      }
    };

    return (
      <>
        <div onChange={onChange}>
          <select name="cover" {...register("cover")}>
            <option value="select">Select an asset</option>
            {data.map((item) => {
              // console.log(item);
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>{display ? <ResponsiveImage data={display.formats} /> : false}</div>
      </>
    );
  }
}
