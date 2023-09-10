import {
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE,
  MOVIE_LIST_ADD_MOVIE,
  MOVIE_LIST_REMOVE_MOVIE
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
    case MOVIE_LIST_ADD_MOVIE:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false
      };
    case MOVIE_LIST_REMOVE_MOVIE:
      let newSate = [];

      for (const movie of state.data) {
        if (movie.imdbId !== action.payload) newSate.push(movie);
      }

      return {
        ...state,
        data: newSate,
        loading: false
      };
    default:
      return { ...state };
  }
}
