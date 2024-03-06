import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (retryCount < 3) {
          setTimeout(() => {
            dataFetching();
            setRetryCount(retryCount + 1);
          }, 2000);
          return;
        } else {
          setError("Failed to load data.");
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    dataFetching();
  }, [retryCount, url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
