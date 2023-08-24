import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieInfosBaseInfos,
  selectMovieInfosCreators,
  selectMovieInfosExtendedCast,
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

  const movieTitleFrench = useMemo(() => {
    return movieTitles ? getMovieTitleByRegion(movieTitles, 'FR') : null;
  }, [movieTitles]);

  const directors = useMemo(() => {
    return movieCreators?.directors
      ? movieCreators.directors
          .find((director) => director.category.text === 'Director')
          .credits.map((director) => director.name.nameText.text)
      : null;
  }, [movieCreators]);

  const writers = useMemo(() => {
    return movieCreators?.writers
      ? movieCreators.writers
          .find((writer) => writer.category.text === 'Writers')
          .credits.map((writer) => writer.name.nameText.text)
      : null;
  }, [movieCreators]);

  return {
    movieInfos,
    moviePrincipalCast: moviePrincipalCast,
    movieExtendedCast: movieExtendedCast,
    movieDirectors: directors,
    movieWriters: writers,
    movieTitleFrench
  };
};
