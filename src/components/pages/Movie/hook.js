import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieInfosBaseInfos,
  selectMovieInfosCreators,
  selectMovieInfosExtendedCast,
  selectMovieInfosLoading,
  selectMovieInfosPrincipalCast,
  selectMovieInfosTitles
} from '../../../store/movieInfos/selectors';
import { getMovieTitleByRegion } from '../../../utils/helpers';

export const useMovie = () => {
  const movieInfos = useSelector(selectMovieInfosBaseInfos);
  const moviePrincipalCast = useSelector(selectMovieInfosPrincipalCast);
  const movieExtendedCast = useSelector(selectMovieInfosExtendedCast);
  const movieCreators = useSelector(selectMovieInfosCreators);
  const movieTitles = useSelector(selectMovieInfosTitles);
  const movieInfosLoading = useSelector(selectMovieInfosLoading);

  const movieRegionTitle = useMemo(() => {
    return movieTitles ? getMovieTitleByRegion(movieTitles, 'FR') : null;
  }, [movieTitles]);

  return {
    movieInfos,
    moviePrincipalCast: moviePrincipalCast,
    movieExtendedCast: movieExtendedCast,
    movieCreators: movieCreators,
    movieRegionTitle,
    movieInfosLoading
  };
};
