import {
  MOVIE_INFOS_LOADING,
  MOVIE_INFOS_SUCCESS,
  MOVIE_INFOS_FAILURE
} from './actions';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_INFOS_LOADING:
      return { ...initialState, loading: true };
    case MOVIE_INFOS_SUCCESS:
      return { ...initialState, data: action.payload };
    case MOVIE_INFOS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
}
