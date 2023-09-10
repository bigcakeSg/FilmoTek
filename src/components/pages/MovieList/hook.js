import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieIdList,
  selectMovieListLoading
} from '../../../store/movieList/selectors';
import {
  getMovieTitleByRegion,
  normalizeTitle,
  scrollTop
} from '../../../utils/helpers';
import { configPageMovieList } from '../../../store/configMovieList/actions';
import {
  selecSort,
  selectDisplayType,
  selectPage,
  selectSearchTitle
} from '../../../store/configMovieList/selectors';
import { selectRegion } from '../../../store/config/selector';

const sliceList = (page, count, list) => {
  const newList = [...list];
  const start = page * count - count;
  const end = start + count;
  return newList.slice(start, end);
};

const sortAlpha = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
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
  const searchTitle = useSelector(selectSearchTitle);
  const movieListLoading = useSelector(selectMovieListLoading);
  const regionLanguage = useSelector(selectRegion);

  // Filter movies
  const moviesFiltered = useMemo(() => {
    if (searchTitle)
      return movieList.filter((movie) => {
        const isOriginalTitle =
          movie.originalTitle
            .toLowerCase()
            .indexOf(searchTitle.toLowerCase()) !== -1;

        const isRegionalTitle =
          getMovieTitleByRegion(movie.regionalTitles, regionLanguage)
            .toLowerCase()
            .indexOf(searchTitle.toLowerCase()) !== -1;

        return isOriginalTitle || isRegionalTitle;
      });

    return movieList;
  }, [movieList, searchTitle]);

  // Sort movies
  const moviesSorted = useMemo(() => {
    const moviesClone = JSON.parse(JSON.stringify(moviesFiltered));

    switch (sortType) {
      case 'ALPHA':
        return moviesClone.sort((a, b) =>
          sortAlpha(
            normalizeTitle(a.originalTitle),
            normalizeTitle(b.originalTitle)
          )
        );
      case 'ALPHA_FRENCH':
        return moviesClone.sort((a, b) =>
          sortAlpha(
            normalizeTitle(
              getMovieTitleByRegion(a.regionalTitles, regionLanguage)
            ) || normalizeTitle(a.originalTitle),
            normalizeTitle(
              getMovieTitleByRegion(b.regionalTitles, regionLanguage)
            ) || normalizeTitle(b.originalTitle)
          )
        );
      case 'CHRONO':
        return moviesClone.sort(sortChrono);
      default:
        return moviesClone;
    }
  }, [moviesFiltered, sortType]);

  // Pagination
  const movieListPage = useMemo(() => {
    return sliceList(actualPage, moviesPerPage, moviesSorted);
  }, [moviesSorted, actualPage]);

  const pageQantity = useMemo(() => {
    const qtt = Math.ceil(moviesFiltered.length / moviesPerPage);

    if (qtt !== 0 && qtt < actualPage) dispatch(configPageMovieList(qtt));

    return qtt;
  }, [moviesFiltered]);

  const handlePaginationChange = useCallback(
    (_, page) => {
      dispatch(configPageMovieList(page));
      scrollTop('movie-list__container');
    },
    [movieList]
  );

  return {
    moviesCount: movieList.length,
    moviesFilteredCount: moviesFiltered.length,
    movieListPage,
    actualPage,
    handlePaginationChange,
    pageQantity,
    displayType,
    sortType,
    movieListLoading
  };
};
