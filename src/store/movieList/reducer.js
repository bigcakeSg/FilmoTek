import {
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE,
  MOVIE_LIST_ADD_MOVIE_SUCCESS,
  MOVIE_LIST_REMOVE_MOVIE_SUCCESS,
  MOVIE_LIST_UPDATE_MOVIE_SUCCESS
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
    case MOVIE_LIST_ADD_MOVIE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false
      };
    case MOVIE_LIST_REMOVE_MOVIE_SUCCESS:
      let newSate = [];

      for (const movie of state.data) {
        if (movie.imdbId !== action.payload) newSate.push(movie);
      }

      return {
        ...state,
        data: newSate,
        loading: false
      };
    case MOVIE_LIST_UPDATE_MOVIE_SUCCESS:
      const newState = [...state.data];
      const movieUpdatedIndex = newState.findIndex(
        (movie) => movie._id === action.payload._id
      );

      if (movieUpdatedIndex !== -1) {
        newState.splice(movieUpdatedIndex, 1);
        newState.push(action.payload);
      }

      return { ...state, data: newState };
    default:
      return { ...state };
  }
}
