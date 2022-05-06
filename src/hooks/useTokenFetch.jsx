import { useState, useEffect } from "react";

import useAxios from "./useAxios";

export const useTokenFetch = (url, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const http = useAxios();

  useEffect(() => {
    if (ref.current) {
      const fetchData = async () => {
        try {
          const response = await http.get(url);
          // console.log("get response", response);

          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }

    return () => {
      ref.current = false;
    };
  }, [url, ref, http]);

  return { data, loading, error };
};
