import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieTitleByRegion } from '../../../utils/helpers';
import { getMovieMiniInfo } from '../../../store/movieList/thunks';

export const useMovieMiniature = (movieId) => {
  const dispatch = useDispatch();
  const [movieMiniInfo, setMovieMiniInfos] = useState();
  const [movieTitleFrench, setMovieTitleFrench] = useState();

  const fetchMovieInfo = async (movieId) => {
    const result = await dispatch(getMovieMiniInfo(movieId));

    setMovieMiniInfos(result);

    setMovieTitleFrench(getMovieTitleByRegion(result.titles, 'FR'));
  };

  useEffect(() => {
    fetchMovieInfo(movieId);
  }, [movieId]);

  return {
    movieMiniInfo,
    movieTitleFrench
  };
};
