import { combineReducers } from 'redux';
import movieListReducer from './movieList/reducer.js';
import movieInfosReducer from './movieInfos/reducer.js';

export default combineReducers({
  movieList: movieListReducer,
  movieInfos: movieInfosReducer
});
