import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieIdList } from '../../../store/movieList/selectors';
import { scrollTop } from '../../../utils/helpers';
import {
  configDisplayMovieList,
  configPageMovieList,
  configSortMovieList
} from '../../../store/configMovieList/actions';
import {
  selecSort,
  selectDisplayType,
  selectPage
} from '../../../store/configMovieList/selectors';

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

  const moviesSorted = useMemo(() => {
    if (sortType === 'ALPHA')
      return [...movieList].sort(sortAlpha).map((movie) => movie.imdbId);
    if (sortType === 'CHRONO')
      return [...movieList].sort(sortChrono).map((movie) => movie.imdbId);
    return [...movieList].map((movie) => movie.imdbId);
  }, [movieList, sortType]);

  const movieListPage = useMemo(() => {
    return sliceList(actualPage, moviesPerPage, moviesSorted);
  }, [moviesSorted, actualPage]);

  const pageQantity = useMemo(() => {
    return Math.ceil(moviesSorted.length / moviesPerPage);
  }, [moviesSorted]);

  const handlePaginationChange = useCallback(
    (_, page) => {
      dispatch(configPageMovieList(page));
      scrollTop('movie-list__container');
    },
    [moviesSorted]
  );

  const handleDisplayChange = (_, newDisplay) => {
    dispatch(configDisplayMovieList(newDisplay));
  };

  const handleSortChange = (event) => {
    dispatch(configSortMovieList(event.target.value));
  };

  return {
    moviesCount: movieList.length,
    movieListPage,
    actualPage,
    handlePaginationChange,
    pageQantity,
    displayType,
    handleDisplayChange,
    handleSortChange,
    sortType
  };
};
