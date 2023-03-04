import { useTrendingList } from 'hooks/useTrendingList';
import { TrendingList } from 'components/TrendingList/TrendingList';
import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import * as API from '../API';

//  const useTrendingList = () => {
//   const [trendingMovies, setMovies] = useState([]);

//   useEffect(() => {
//     API.getTrending().then(ret => setMovies(ret));
//   }, []);

//   return { trendingMovies };
// };  

const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  
  }
`;



const HomePage = () => {
  const { trendingMovies } = useTrendingList();
  return (
    <div>
    
      <HomeTitle>Tranding today</HomeTitle>
      <TrendingList movies={trendingMovies} />
    </div>
  );
};
export default HomePage;
