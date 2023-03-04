import { useParams } from 'react-router-dom';
import { useMovieReviews } from 'hooks/useMovieReviews';
// import * as API from '../API';
// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// const useMovieReviews = movieId => {
//   const [movieReviews, setReviews] = useState([]);

//   useEffect(() => {
//     API.getMoviesReviews(movieId).then(ret => setReviews(ret));
//   }, [movieId]);
//   return { movieReviews };
// };

const Reviews = () => {
  const { movieId } = useParams();
  const { movieReviews } = useMovieReviews(movieId);

  return (
    <div>
      {movieReviews?.length === 0 && (
        <p>We don't have any reviews for this movies</p>
      )}
      <ul>
        {movieReviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
