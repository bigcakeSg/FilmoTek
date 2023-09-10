import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNotification } from '../../../store/notification/actions';
import { deleteMovieByImdbId } from '../../../store/movieList/thunks';

export const useDeleteMovieForm = (movieImdbId, setDeleteMovieOpen) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMovieDeletion, setIsMovieDeletion] = useState(false);

  const handleDeleteMovie = useCallback(async (e) => {
    e.preventDefault();
    setIsMovieDeletion(true);

    const result = await dispatch(deleteMovieByImdbId(movieImdbId));

    setDeleteMovieOpen(false);
    setIsMovieDeletion(false);
    navigate(`/`);

    dispatch(
      addNotification({
        open: true,
        ...result
      })
    );
  }, []);

  return {
    handleDeleteMovie,
    isMovieDeletion
  };
};
