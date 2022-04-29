import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }

    return () => {
      ref.current = false;
    };
  }, [url, ref]);
  return { data, loading, error };
};
