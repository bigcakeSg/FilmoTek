import {
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE
} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LIST_LOADING:
      return { ...state, loading: true };
    case MOVIE_LIST_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case MOVIE_LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
}
