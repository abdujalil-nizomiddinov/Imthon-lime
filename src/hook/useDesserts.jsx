import { useEffect, useState } from "react";

export default function useDesserts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/dessertss/desserts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
