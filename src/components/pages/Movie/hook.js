import { useParams } from 'react-router-dom';
import { getMovieTitleByRegion } from '../../../utils/helpers';
import {
  movieInfo,
  moviePrincipalCast,
  movieExtendedCast,
  movieCreators,
  movieTitles
} from '../../../mocks';

export const useMovie = () => {
  const { movieId } = useParams();
  const movieTitleFrench = getMovieTitleByRegion(movieTitles, 'FR');
  const directors = movieCreators.results.directors
    .find((director) => director.category.text === 'Director')
    .credits.map((director) => director.name.nameText.text);
  const writers = movieCreators.results.writers
    .find((writer) => writer.category.text === 'Writers')
    .credits.map((writer) => writer.name.nameText.text);

  return {
    movieInfo: movieInfo.results,
    moviePrincipalCast: moviePrincipalCast.results,
    movieExtendedCast: movieExtendedCast.results,
    movieDirectors: directors,
    movieWriters: writers,
    movieTitleFrench
  };
};
