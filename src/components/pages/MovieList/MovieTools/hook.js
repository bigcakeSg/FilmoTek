import { useDispatch } from 'react-redux';
import { updateSeenMovie } from '../../../../store/movieList/thunks';

export const useMovieTools = (movie) => {
  const dispatch = useDispatch();

  const handleSeen = (e) => {
    e.preventDefault();
    dispatch(updateSeenMovie(movie._id, !movie.seen));
  };

  return { handleSeen };
};
