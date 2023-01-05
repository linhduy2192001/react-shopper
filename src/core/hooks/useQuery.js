import { useEffect, useState } from "react";

const useQuery = (callbackPromise, dependencyList) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    callbackPromise()
      .then((res) => {
        setData(res.data);
        setPaginate(res.paginate || {});
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencyList);
  return {
    data,
    loading,
    error,
    paginate,
  };
};
export default useQuery;
