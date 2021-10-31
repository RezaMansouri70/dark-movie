import { useEffect, useState } from "react";

export default function useMovieDB(endpoint, option) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=6e26d2fd9f12428430a110d2ab0ec995&${option}`
    )
      // fetch(
      //   `https://api.themoviedb.org/3/${endpoint}?api_key=6e26d2fd9f12428430a110d2ab0ec995&
      //   ${new URLSearchParams(option?.query).toString()}`
      // )
      .then((r) => r.json())
      .then(setData)
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading };
}
