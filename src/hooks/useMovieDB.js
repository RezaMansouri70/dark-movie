import { useEffect, useState } from "react";

export default function useMovieDB(endpoint, option) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=6e26d2fd9f12428430a110d2ab0ec995&${option}`
    )
      .then((r) => r.json())
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, option]);
  return { data, loading };
}
