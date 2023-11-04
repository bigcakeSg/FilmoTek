import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieInfosData,
  selectMovieInfosError,
  selectMovieInfosLoading
} from '../../../store/movieInfos/selectors';
import { getMovieTitleByRegion } from '../../../utils/helpers';
import { selectRegion } from '../../../store/config/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMovie = () => {
  const navigate = useNavigate();

  const movieInfos = useSelector(selectMovieInfosData);
  const movieInfosLoading = useSelector(selectMovieInfosLoading);
  const movieInfosError = useSelector(selectMovieInfosError);
  const regionLanguage = useSelector(selectRegion);

  useEffect(() => {
    if (movieInfosError) navigate(`${process.env.PUBLIC_URL}//not-found`);
  }, [movieInfosError]);

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
