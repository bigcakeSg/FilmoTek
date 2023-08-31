import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieTitleByRegion } from '../../../../utils/helpers';
import { getMovieMiniInfo } from '../../../../store/movieList/thunks';

export const useMovieMiniature = (movieId) => {
  const dispatch = useDispatch();

  const [movieMiniInfos, setMovieMiniInfos] = useState(null);
  useEffect(() => {
    const getInfos = async (id) => {
      const infos = await dispatch(getMovieMiniInfo(movieId));
      setMovieMiniInfos(infos);
    };
    getInfos(movieId);
  }, [movieId]);

  const movieTitleFrench = useMemo(
    () =>
      movieMiniInfos?.regionalTitles
        ? getMovieTitleByRegion(movieMiniInfos.regionalTitles, 'FR')
        : '',
    [movieMiniInfos]
  );

  return {
    movieMiniInfos,
    movieTitleFrench
  };
};
