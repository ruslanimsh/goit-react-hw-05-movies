import { useState, useEffect } from 'react';
import * as API from '../API';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(ret => setMovies(ret));
  }, []);

  return { trendingMovies };
};
