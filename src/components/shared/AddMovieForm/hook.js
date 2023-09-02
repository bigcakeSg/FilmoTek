import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMovieByImdbId } from '../../../store/movieInfos/thunks';
import { selectCreationRedirect } from '../../../store/configMovieList/selectors';
import { configRedirectMovieList } from '../../../store/configMovieList/actions';

export const useAddMovieForm = (setAddMovieOpen) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newMovie, setNewMovie] = useState('');
  const [isMovieCreation, setIsMovieCreation] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState({
    severity: 'success',
    message: ''
  });

  const creationRedirect = useSelector(selectCreationRedirect);

  const handleRedirect = (e) => {
    dispatch(configRedirectMovieList(e.target.checked));
  };

  const handleAddMovie = useCallback(
    async (e) => {
      e.preventDefault();
      setIsMovieCreation(true);

      const result = await dispatch(postMovieByImdbId(newMovie));

      setResultMessage(result);

      setAddMovieOpen(false);
      setIsMovieCreation(false);
      setNewMovie('');
      if (creationRedirect && result.severity !== 'error')
        navigate(`/movie/${newMovie}`);
      setIsSnackOpen(true);
    },
    [newMovie, creationRedirect]
  );

  return {
    newMovie,
    setNewMovie,
    handleAddMovie,
    isMovieCreation,
    creationRedirect,
    handleRedirect,
    isSnackOpen,
    setIsSnackOpen,
    resultMessage
  };
};
