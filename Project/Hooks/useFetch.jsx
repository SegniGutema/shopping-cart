import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch(url);
        const result = await response.data;
        setData(result.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    dataFetching();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
