import {
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE,
  MOVIE_MINI_INFOS_LOADING,
  MOVIE_MINI_INFOS_SUCCESS,
  MOVIE_MINI_INFOS_FAILURE
} from './actions';

const initialState = {
  movieIdList: [],
  movieMiniInfosList: {},
  loading: false,
  error: null
};

const miniInfosState = { infos: {}, loading: false, error: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LIST_LOADING:
      return { ...state, loading: true };
    case MOVIE_LIST_SUCCESS:
      return { ...state, movieIdList: action.payload, loading: false };
    case MOVIE_LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case MOVIE_MINI_INFOS_LOADING:
      return {
        ...state,
        movieMiniInfosList: {
          ...state.movieMiniInfosList,
          [action.id]: { ...miniInfosState, loading: true }
        }
      };
    case MOVIE_MINI_INFOS_SUCCESS:
      return {
        ...state,
        movieMiniInfosList: {
          ...state.movieMiniInfosList,
          [action.payload.id]: { ...miniInfosState, infos: action.payload }
        }
      };
    case MOVIE_MINI_INFOS_FAILURE:
      return {
        ...state,
        movieMiniInfosList: {
          ...state.movieMiniInfosList,
          [action.id]: { ...miniInfosState, error: action.error }
        }
      };
    default:
      return { ...state };
  }
}
