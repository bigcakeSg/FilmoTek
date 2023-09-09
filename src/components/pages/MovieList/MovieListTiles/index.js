import { PropTypes } from 'prop-types';
import MovieMiniature from '../MovieMiniature';

const MovieListTiles = ({ movieList }) => {
  return (
    <>
      {movieList.map((movie) => (
        <MovieMiniature
          movie={movie}
          miniatureType="TILE"
          key={`movie-${movie.imdbId}`}
        />
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
