import {
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE
} from './actions';

const initialState = {
  movieIdList: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LIST_LOADING:
      return { ...state, loading: true };
    case MOVIE_LIST_SUCCESS:
      return { ...initialState, movieIdList: action.payload };
    case MOVIE_LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return initialState;
  }
}
