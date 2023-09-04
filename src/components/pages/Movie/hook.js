import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieInfosData,
  selectMovieInfosLoading
} from '../../../store/movieInfos/selectors';
import { getMovieTitleByRegion } from '../../../utils/helpers';
import { selectRegion } from '../../../store/config/selector';

export const useMovie = () => {
  const movieInfos = useSelector(selectMovieInfosData);
  const movieInfosLoading = useSelector(selectMovieInfosLoading);
  const regionLanguage = useSelector(selectRegion);

  const movieRegionTitle = useMemo(() => {
    return movieInfos?.regionalTitles
      ? getMovieTitleByRegion(movieInfos.regionalTitles, regionLanguage)
      : null;
  }, [movieInfos]);

  return {
    movieInfos,
    movieRegionTitle,
    movieInfosLoading
  };
};
