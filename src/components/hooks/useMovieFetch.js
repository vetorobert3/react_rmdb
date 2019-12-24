import { useState, useEffect, useCallBack } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallBack(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await(await fetch(creditsEndpoint)).json();
      console.log(creditsResult);

    } catch (error) {
      setError(true);
    }
    setLoading(false);

  }, [movieId])

  useEffect(() => {
    fetchData();
  })

  return [state, loading, error];
} 