import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getMovieTitleByRegion,
  loadImageAsBlob
} from '../../../../utils/helpers';
import { getMovieMiniInfo } from '../../../../store/movieList/thunks';

export const useMovieMiniature = (movieId) => {
  const dispatch = useDispatch();

  const [movieMiniInfos, setMovieMiniInfos] = useState(null);
  const [blobUrl, setBlobUrl] = useState('');

  useEffect(() => {
    const getInfos = async (id) => {
      const infos = await dispatch(getMovieMiniInfo(id));
      const blob = await dispatch(loadImageAsBlob(infos.picture.url, id));

      setMovieMiniInfos(infos);
      setBlobUrl(blob);
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
    movieTitleFrench,
    blobUrl
  };
};
