import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieIdList,
  selectMovieListLoading
} from '../../../store/movieList/selectors';
import { getMovieTitleByRegion, scrollTop } from '../../../utils/helpers';
import { configPageMovieList } from '../../../store/configMovieList/actions';
import {
  selecSort,
  selectDisplayType,
  selectPage,
  selectSearchTitleRedirect
} from '../../../store/configMovieList/selectors';
import { regionLanguage } from '../../../utils/configs';

const sliceList = (page, count, list) => {
  const newList = [...list];
  const start = page * count - count;
  const end = start + count;
  return newList.slice(start, end);
};

const sortAlpha = (a, b) => {
  if (a.originalTitle.toLowerCase() < b.originalTitle.toLowerCase()) return -1;
  if (a.originalTitle.toLowerCase() > b.originalTitle.toLowerCase()) return 1;
  return 0;
};

const sortChrono = (a, b) => {
  const dateA = new Date(
    `${a.releaseDate.year}-${a.releaseDate.month || 1}-${
      a.releaseDate.day || 1
    }`
  ).getTime();
  const dateB = new Date(
    `${b.releaseDate.year}-${b.releaseDate.month || 1}-${
      b.releaseDate.day || 1
    }`
  ).getTime();

  if (dateA < dateB) return -1;
  if (dateA > dateB) return 1;
  return 0;
};

const moviesPerPage = 30;

export const useMovieList = () => {
  const dispatch = useDispatch();

  const sortType = useSelector(selecSort);
  const displayType = useSelector(selectDisplayType);
  const actualPage = useSelector(selectPage);

  const movieList = useSelector(selectMovieIdList);
  const searchTitle = useSelector(selectSearchTitleRedirect);
  const movieListLoading = useSelector(selectMovieListLoading);

  const movieFiltered = useMemo(() => {
    return movieList.filter((movie) => {
      const isOriginalTitle =
        movie.originalTitle.toLowerCase().indexOf(searchTitle.toLowerCase()) !==
        -1;

      const isRegionalTitle =
        getMovieTitleByRegion(movie.regionalTitles, regionLanguage)
          .toLowerCase()
          .indexOf(searchTitle.toLowerCase()) !== -1;

      return isOriginalTitle || isRegionalTitle;
    });
  }, [movieList, searchTitle]);

  const moviesSorted = useMemo(() => {
    const moviesClone = JSON.parse(JSON.stringify(movieFiltered));

    if (sortType === 'ALPHA') return moviesClone.sort(sortAlpha);
    if (sortType === 'CHRONO') return moviesClone.sort(sortChrono);

    return moviesClone.map((movie) => movie.imdbId);
  }, [movieFiltered, sortType]);

  const movieListPage = useMemo(() => {
    return sliceList(actualPage, moviesPerPage, moviesSorted);
  }, [moviesSorted, actualPage]);

  const pageQantity = useMemo(() => {
    const qtt = Math.ceil(movieFiltered.length / moviesPerPage);

    if (qtt !== 0 && qtt < actualPage) dispatch(configPageMovieList(qtt));

    return qtt;
  }, [movieFiltered]);

  const handlePaginationChange = useCallback(
    (_, page) => {
      dispatch(configPageMovieList(page));
      scrollTop('movie-list__container');
    },
    [movieList]
  );

  return {
    moviesCount: movieList.length,
    movieListPage,
    actualPage,
    handlePaginationChange,
    pageQantity,
    displayType,
    sortType,
    movieListLoading
  };
};
