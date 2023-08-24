import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieTitleByRegion } from '../../../utils/helpers';
import { getMovieMiniInfo } from '../../../store/movieList/thunks';
import {
  selectMovieMiniInfosData,
  selectMovieMiniInfosLoading
} from '../../../store/movieList/selectors';

export const useMovieMiniature = (movieId) => {
  const dispatch = useDispatch();

  const movieMiniInfosLoading = useSelector(
    selectMovieMiniInfosLoading(movieId)
  );
  const movieMiniInfos = useSelector(selectMovieMiniInfosData(movieId));

  const movieTitleFrench = useMemo(
    () =>
      movieMiniInfos?.titles
        ? getMovieTitleByRegion(movieMiniInfos.titles, 'FR')
        : '',
    [movieMiniInfos]
  );

  useEffect(() => {
    if (!movieMiniInfos) dispatch(getMovieMiniInfo(movieId));
  }, [movieId, movieMiniInfos]);

  return {
    movieMiniInfosLoading,
    movieMiniInfos,
    movieTitleFrench
  };
};
