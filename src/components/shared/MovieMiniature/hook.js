import { movieMiniInfo, movieTitles } from '../../../mocks';
import { getMovieTitleByRegion } from '../../../utils/helpers';

export const useMovieMiniature = (movieId) => {
  const movieTitleFrench = getMovieTitleByRegion(movieTitles, 'FR');

  return {
    movieMiniInfo: movieMiniInfo.results,
    movieTitleFrench
  };
};
