import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postMovieByImdbId } from '../../../store/movieInfos/thunks';

export const useAddMovieForm = (setAddMovieOpen) => {
  const dispatch = useDispatch();

  const [newMovie, setNewMovie] = useState('');

  const handleAddMovie = useCallback(async () => {
    await dispatch(postMovieByImdbId(newMovie));
    setAddMovieOpen(false);
    setNewMovie('');
  }, [newMovie]);

  return { newMovie, setNewMovie, handleAddMovie };
};
