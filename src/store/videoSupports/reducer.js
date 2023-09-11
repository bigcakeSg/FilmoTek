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
      return { ...initialState, vhs: action.payload };
    case SUPPORT_LD_SUCCESS:
      return { ...initialState, ld: action.payload };
    case SUPPORT_DVD_SUCCESS:
      return { ...initialState, dvd: action.payload };
    case SUPPORT_BD_SUCCESS:
      return { ...initialState, bd: action.payload };
    case SUPPORT_UHD_SUCCESS:
      return { ...initialState, uhd: action.payload };
    default:
      return { ...state };
  }
}
