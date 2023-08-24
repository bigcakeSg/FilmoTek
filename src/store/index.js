import { combineReducers } from 'redux';
import movieListReducer from './movieList/reducer.js';

export default combineReducers({
  movieList: movieListReducer
});
