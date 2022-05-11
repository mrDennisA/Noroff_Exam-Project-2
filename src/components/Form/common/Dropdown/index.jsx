import { useRef } from "react";
import { useFetch } from "../../../../hooks/useFetch";

import { Select, Option } from "../../Form.styled";

export default function MediaDropdown(props) {
  const { register, defaultValue = "none", registerName, url } = props;

  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading) {
    return (
      <Select {...register(registerName)} defaultValue={defaultValue}>
        <>
          {defaultValue === "none" && (
            <Option value={defaultValue} hidden>
              None
            </Option>
          )}
          {data.data.map((item) => {
            return (
              <Option key={item.id} value={item.id}>
                {item.attributes.color}
              </Option>
            );
          })}
        </>
      </Select>
    );
  }
}
