import {
  SUPPORT_VHS_SUCCESS,
  SUPPORT_LD_SUCCESS,
  SUPPORT_DVD_SUCCESS,
  SUPPORT_BD_SUCCESS,
  SUPPORT_UHD_SUCCESS
} from './actions';

const initialState = {
  vhs: [],
  ld: [],
  dvd: [],
  bd: [],
  uhd: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUPPORT_VHS_SUCCESS:
      return { ...state, vhs: action.payload };
    case SUPPORT_LD_SUCCESS:
      return { ...state, ld: action.payload };
    case SUPPORT_DVD_SUCCESS:
      return { ...state, dvd: action.payload };
    case SUPPORT_BD_SUCCESS:
      return { ...state, bd: action.payload };
    case SUPPORT_UHD_SUCCESS:
      return { ...state, uhd: action.payload };
    default:
      return { ...state };
  }
}
