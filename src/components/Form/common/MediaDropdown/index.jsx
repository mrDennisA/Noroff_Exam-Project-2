import { useState, useRef, useEffect } from "react";
import { useTokenFetch } from "../../../../hooks/useTokenFetch";
import ResponsiveImage from "../../../common/ResponsiveImage";

import { Content, Media } from "./index.styled";
import { Select, Option } from "../../Form.styled";

export default function MediaDropdown(props) {
  const { register, defaultValue = "none" } = props;

  const [display, setDisplay] = useState(false);

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useTokenFetch("/upload/files", isComponentMounted, []);

  useEffect(() => {
    if (!loading) {
      data.filter((image) => defaultValue === image.id && setDisplay(image));
    }
  }, [data, defaultValue, loading]);

  const onChange = (item) => {
    // console.log(item);
    data.filter((image) => parseFloat(item.target.value) === image.id && setDisplay(image));
  };

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading) {
    return (
      <Content onChange={onChange}>
        <Media>{display ? <ResponsiveImage data={display} /> : <span>image</span>}</Media>
        <Select {...register("cover")} defaultValue={defaultValue}>
          <>
            {defaultValue === "none" && (
              <Option value={defaultValue} hidden>
                None
              </Option>
            )}
            {data.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </>
        </Select>
      </Content>
    );
  }
}
