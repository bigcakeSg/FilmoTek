import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actions';

const initialState = {
  open: false,
  message: '',
  severity: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...action.payload, open: true };
    case REMOVE_NOTIFICATION:
      return initialState;
    default:
      return { ...state };
  }
}
