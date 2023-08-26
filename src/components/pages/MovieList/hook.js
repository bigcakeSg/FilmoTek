import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMovieIdList } from '../../../store/movieList/selectors';

const sliceList = (page, count, list) => {
  const newList = [...list];
  const start = page * count - count;
  const end = start + count;
  return newList.slice(start, end);
};

export const useMovieList = () => {
  const moviesPerPage = 30;

  const [movieListPage, setMovieListPage] = useState([]);
  const movieList = useSelector(selectMovieIdList);

  useEffect(() => {
    setMovieListPage(sliceList(1, moviesPerPage, movieList));
  }, []);

  const pageQantity = useMemo(() => {
    return Math.ceil(movieList.length / moviesPerPage);
  }, [movieList]);

  const handleChange = useCallback(
    (_, page) => {
      setMovieListPage(sliceList(page, moviesPerPage, movieList));
    },
    [movieList]
  );

  return {
    moviesCount: movieList.length,
    movieListPage,
    handleChange,
    pageQantity
  };
};
