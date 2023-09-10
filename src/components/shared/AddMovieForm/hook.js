import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCreationRedirect } from '../../../store/configMovieList/selectors';
import { configRedirectMovieList } from '../../../store/configMovieList/actions';
import { addNotification } from '../../../store/notification/actions';
import { postMovieByImdbId } from '../../../store/movieList/thunks';

export const useAddMovieForm = (setAddMovieOpen) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newMovie, setNewMovie] = useState('');
  const [isMovieCreation, setIsMovieCreation] = useState(false);

  const creationRedirect = useSelector(selectCreationRedirect);

  const handleRedirect = (e) => {
    dispatch(configRedirectMovieList(e.target.checked));
  };

  const handleAddMovie = useCallback(
    async (e) => {
      e.preventDefault();
      setIsMovieCreation(true);

      const result = await dispatch(postMovieByImdbId(newMovie));

      setAddMovieOpen(false);
      setIsMovieCreation(false);
      setNewMovie('');
      if (creationRedirect && result.severity !== 'error')
        navigate(`/movie/${newMovie}`);

      dispatch(
        addNotification({
          open: true,
          ...result
        })
      );
    },
    [newMovie, creationRedirect]
  );

  return {
    newMovie,
    setNewMovie,
    handleAddMovie,
    isMovieCreation,
    creationRedirect,
    handleRedirect
  };
};
