import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postMovie } from '../../../store/movieInfos/thunks';

export const useAddMovieForm = (setAddMovieOpen) => {
  const dispatch = useDispatch();

  const [newMovie, setNewMovie] = useState('');

  const handleAddMovie = useCallback(async () => {
    await dispatch(postMovie(newMovie));
    setAddMovieOpen(false);
    setNewMovie('');
  }, [newMovie]);

  return { newMovie, setNewMovie, handleAddMovie };
};
