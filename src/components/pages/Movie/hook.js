import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieInfosData,
  selectMovieInfosLoading
} from '../../../store/movieInfos/selectors';
import { getMovieTitleByRegion, loadImageAsBlob } from '../../../utils/helpers';

export const useMovie = () => {
  const dispatch = useDispatch();

  const movieInfos = useSelector(selectMovieInfosData);
  const movieInfosLoading = useSelector(selectMovieInfosLoading);

  const [blobUrl, setBlobUrl] = useState('');

  useEffect(() => {
    const getInfos = async (url, id) => {
      let blob = '';

      if (url) blob = await dispatch(loadImageAsBlob(url, id));

      setBlobUrl(blob);
    };

    getInfos(movieInfos?.picture?.url, movieInfos?.imdbId);
  }, [movieInfos]);

  const movieRegionTitle = useMemo(() => {
    return movieInfos?.regionalTitles
      ? getMovieTitleByRegion(movieInfos.regionalTitles, 'FR')
      : null;
  }, [movieInfos]);

  return {
    movieInfos,
    movieRegionTitle,
    movieInfosLoading,
    blobUrl
  };
};
