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
  selectSearchTitle,
  selectSeenFilter,
  selectVideoFormatsFilter
} from '../../../store/configMovieList/selectors';
import { selectRegion } from '../../../store/config/selectors';
import {
  selectSupportBd,
  selectSupportDvd,
  selectSupportLd,
  selectSupportUhd,
  selectSupportVhs
} from '../../../store/videoSupports/selectors';

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
  const seenFilter = useSelector(selectSeenFilter);
  const videoFormatsFilter = useSelector(selectVideoFormatsFilter);

  const movieListLoading = useSelector(selectMovieListLoading);
  const regionLanguage = useSelector(selectRegion);

  const supportVhs = useSelector(selectSupportVhs);
  const supportLd = useSelector(selectSupportLd);
  const supportDvd = useSelector(selectSupportDvd);
  const supportBd = useSelector(selectSupportBd);
  const supportUhd = useSelector(selectSupportUhd);

  // Filter movies
  const moviesFiltered = useMemo(() => {
    let newMovieList = movieList;

    newMovieList = movieList.filter((movie) => {
      let isOriginalTitle = true;
      let isRegionalTitle = true;

      if (searchTitle) {
        isOriginalTitle =
          movie.originalTitle
            .toLowerCase()
            .indexOf(searchTitle.toLowerCase()) !== -1;

        isRegionalTitle =
          getMovieTitleByRegion(movie.regionalTitles, regionLanguage)
            .toLowerCase()
            .indexOf(searchTitle.toLowerCase()) !== -1;
      }

      const titleValidate = isOriginalTitle || isRegionalTitle;

      const seenFilterValidate = seenFilter.length
        ? seenFilter.includes(movie.seen)
        : true;

      const formatValidate =
        !videoFormatsFilter.length ||
        (videoFormatsFilter.includes('vhs') &&
          supportVhs.includes(movie._id)) ||
        (videoFormatsFilter.includes('ld') && supportLd.includes(movie._id)) ||
        (videoFormatsFilter.includes('dvd') &&
          supportDvd.includes(movie._id)) ||
        (videoFormatsFilter.includes('bd') && supportBd.includes(movie._id)) ||
        (videoFormatsFilter.includes('uhd') && supportUhd.includes(movie._id));

      return titleValidate && seenFilterValidate && formatValidate;
    });

    return newMovieList;
  }, [
    movieList,
    regionLanguage,
    searchTitle,
    seenFilter,
    supportBd,
    supportDvd,
    supportLd,
    supportUhd,
    supportVhs,
    videoFormatsFilter
  ]);

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
