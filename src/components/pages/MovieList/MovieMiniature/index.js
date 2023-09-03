import { PropTypes } from 'prop-types';

import MovieListItem from './MovieListItem';
import MovieTile from './MovieTile';

const MovieMiniature = ({ movie, miniatureType }) => {
  switch (miniatureType) {
    case 'TILE':
      return <MovieTile movie={movie} />;
    case 'LIST':
      return <MovieListItem movie={movie} />;
    default:
      return null;
  }
};

export default MovieMiniature;

MovieMiniature.propTypes = {
  movie: PropTypes.object.isRequired,
  miniatureType: PropTypes.string
};
