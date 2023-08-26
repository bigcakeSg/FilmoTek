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

  const movieList = useSelector(selectMovieIdList);

  useEffect(() => {
    setMovieListPage(sliceList(1, moviesPerPage, movieList));
  }, []);

  const pageQantity = useMemo(() => {
    return Math.ceil(movieList.length / moviesPerPage);
  }, [movieList]);

  const handleChange = useCallback(
    (_, page) => {
      scrollTop('movie-list__container');
      setMovieListPage(sliceList(page, moviesPerPage, movieList));
    },
    [movieList]
  );

  const handleDisplayType = (_, newDisplay) => {
    setDisplayType(newDisplay);
  };

  return {
    moviesCount: movieList.length,
    movieListPage,
    handleChange,
    pageQantity,
    displayType,
    handleDisplayType
  };
};
