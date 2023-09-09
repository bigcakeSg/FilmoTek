import { CONFIG_FAILURE, CONFIG_LOADING, CONFIG_SUCCESS } from './actions';

const initialState = {
  data: {},
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_LOADING:
      return { ...initialState, loading: true };
    case CONFIG_SUCCESS:
      return { ...initialState, data: action.payload };
    case CONFIG_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
}
