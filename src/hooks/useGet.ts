import { useEffect, useState } from "react";

export const useGet = <T>(
  url: string,
  searchQuery: string | undefined
): {
  loading: boolean;
  error: boolean;
  data?: T[];
  setData: any;
  //(data: T[]) => void;
} => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 2) {
      setLoading(true);
      fetch(`${url}/${searchQuery}`, {
        method: "GET",
      })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("Client error: " + response.status);
          } else if (response.status >= 500) {
            throw new Error("Server error: " + response.status);
          }
          return response.json();
        })
        .then((response: T[]) => {
          console.log("CREATE success");
          setData(response);
          setError(false);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url, searchQuery]);

  return { loading, error, data, setData };
};
