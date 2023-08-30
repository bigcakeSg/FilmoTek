import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieInfosData,
  selectMovieInfosLoading
} from '../../../store/movieInfos/selectors';
import { getMovieTitleByRegion } from '../../../utils/helpers';

export const useMovie = () => {
  const movieInfos = useSelector(selectMovieInfosData);
  const movieInfosLoading = useSelector(selectMovieInfosLoading);

  const movieRegionTitle = useMemo(() => {
    return movieInfos?.regionalTitles
      ? getMovieTitleByRegion(movieInfos.regionalTitles, 'FR')
      : null;
  }, [movieInfos]);

  return {
    movieInfos,
    movieRegionTitle,
    movieInfosLoading
  };
};
