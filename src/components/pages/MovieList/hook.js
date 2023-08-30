import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMovieIdList } from '../../../store/movieList/selectors';
import { scrollTop } from '../../../utils/helpers';

const sliceList = (page, count, list) => {
  const newList = [...list];
  const start = page * count - count;
  const end = start + count;
  return newList.slice(start, end);
};

export const useMovieList = () => {
  const moviesPerPage = 30;

  const [movieListPage, setMovieListPage] = useState([]);
  const [displayType, setDisplayType] = useState('TILES');
  const [sortType, setSortType] = useState('ALPHA');

  const movieList = useSelector(selectMovieIdList);

  const moviesSorted = useMemo(() => {
    // TODO: sort
    return movieList.map((movie) => movie.imdbId);
  }, [movieList, sortType]);

  useEffect(() => {
    setMovieListPage(sliceList(1, moviesPerPage, moviesSorted));
  }, [moviesPerPage, moviesSorted]);

  const pageQantity = useMemo(() => {
    return Math.ceil(moviesSorted.length / moviesPerPage);
  }, [moviesSorted]);

  const handlePaginationChange = useCallback(
    (_, page) => {
      scrollTop('movie-list__container');
      setMovieListPage(sliceList(page, moviesPerPage, moviesSorted));
    },
    [moviesSorted]
  );

  const handleDisplayChange = (_, newDisplay) => {
    setDisplayType(newDisplay);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  return {
    moviesCount: movieList.length,
    movieListPage,
    handlePaginationChange,
    pageQantity,
    displayType,
    handleDisplayChange,
    handleSortChange,
    sortType
  };
};
