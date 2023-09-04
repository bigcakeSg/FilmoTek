import { useDispatch, useSelector } from 'react-redux';
import {
  configDisplayMovieList,
  configSearchTitleMovieList,
  configSortMovieList
} from '../../../../store/configMovieList/actions';
import {
  selecSort,
  selectDisplayType,
  selectSearchTitle
} from '../../../../store/configMovieList/selectors';
import { debounce } from '../../../../utils/helpers';

export const useMovieListActionsButtons = () => {
  const dispatch = useDispatch();

  const sortType = useSelector(selecSort);
  const displayType = useSelector(selectDisplayType);
  const searchTitle = useSelector(selectSearchTitle);

  const handleDisplayChange = (_, newDisplay) => {
    dispatch(configDisplayMovieList(newDisplay));
  };

  const handleSortChange = (event) => {
    dispatch(configSortMovieList(event.target.value));
  };

  const filterTitle = debounce((value) => {
    dispatch(configSearchTitleMovieList(value));
  }, 500);

  const handleSearchTitleChange = (event) => {
    // filterTitle(event.target.value);
    dispatch(configSearchTitleMovieList(event.target.value));
  };

  const handleClearTitleFilter = () => {
    dispatch(configSearchTitleMovieList(''));
  };

  return {
    handleDisplayChange,
    handleSortChange,
    handleSearchTitleChange,
    sortType,
    displayType,
    searchTitle,
    handleClearTitleFilter
  };
};
