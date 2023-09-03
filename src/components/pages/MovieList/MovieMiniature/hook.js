import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getMovieTitleByRegion,
  loadImageAsBlob
} from '../../../../utils/helpers';
import { regionLanguage } from '../../../../utils/configs';
// import { selectMovieById } from '../../../../store/movieList/selectors';

export const useMovieMiniature = (movieMiniInfos) => {
  const dispatch = useDispatch();

  const [blobUrl, setBlobUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getBlob = async (id) => {
      const blob = await dispatch(
        loadImageAsBlob(movieMiniInfos.picture.url, id)
      );
      setBlobUrl(blob);
      setIsLoading(false);
    };

    setBlobUrl(movieMiniInfos.picture.url);
    setIsLoading(false);
    // getBlob(movieMiniInfos.imdbId);
  }, [movieMiniInfos]);

  const movieTitleFrench = useMemo(
    () =>
      movieMiniInfos?.regionalTitles
        ? getMovieTitleByRegion(movieMiniInfos.regionalTitles, regionLanguage)
        : '',
    [movieMiniInfos]
  );

  return {
    movieTitleFrench,
    blobUrl,
    isLoading
  };
};
