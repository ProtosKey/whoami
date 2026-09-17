import { useEffect, useState } from 'react';
import { load } from 'js-yaml';

export default function useYaml(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`${path}: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setData(load(text));
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return { data, error };
}
