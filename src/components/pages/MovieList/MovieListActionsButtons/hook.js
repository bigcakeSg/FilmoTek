import { useDispatch, useSelector } from 'react-redux';
import {
  configDisplayMovieList,
  configSearchTitleMovieList,
  configSortMovieList
} from '../../../../store/configMovieList/actions';
import {
  selecSort,
  selectDisplayType
} from '../../../../store/configMovieList/selectors';

export const useMovieListActionsButtons = () => {
  const dispatch = useDispatch();

  const sortType = useSelector(selecSort);
  const displayType = useSelector(selectDisplayType);

  const handleDisplayChange = (_, newDisplay) => {
    dispatch(configDisplayMovieList(newDisplay));
  };

  const handleSortChange = (event) => {
    dispatch(configSortMovieList(event.target.value));
  };

  const handleSearchTitleChange = (event) => {
    dispatch(configSearchTitleMovieList(event.target.value));
  };

  return {
    handleDisplayChange,
    handleSortChange,
    handleSearchTitleChange,
    sortType,
    displayType
  };
};
