import { PropTypes } from 'prop-types';
import MovieMiniature from '../MovieMiniature';

const MovieListTiles = ({ movieList }) => {
  return (
    <>
      {movieList.map((movie) => (
        <MovieMiniature movieId={movie} key={`movie-${movie}`} />
      ))}
    </>
  );
};

export default MovieListTiles;

MovieMiniature.propTypes = {
  movieList: PropTypes.array
};

MovieListTiles.defaultProps = {
  movieList: []
};
