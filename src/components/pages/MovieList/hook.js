import { useSelector } from 'react-redux';
import { selectMovieIdList } from '../../../store/movieList/selectors';

export const useMovieList = () => {
  const movieList = useSelector(selectMovieIdList);

  return { movieList };
};
