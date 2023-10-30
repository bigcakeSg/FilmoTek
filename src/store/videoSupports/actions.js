export const SUPPORT_VHS_SUCCESS = 'Support: vhs';
export const SUPPORT_LD_SUCCESS = 'Support: ld';
export const SUPPORT_DVD_SUCCESS = 'Support: dvd';
export const SUPPORT_BD_SUCCESS = 'Support: bd';
export const SUPPORT_UHD_SUCCESS = 'Support: uhd';

export const supportVhsSuccess = (data) => ({
  type: SUPPORT_VHS_SUCCESS,
  payload: data
});

export const supportLdSuccess = (data) => ({
  type: SUPPORT_LD_SUCCESS,
  payload: data
});

export const supportDvdSuccess = (data) => ({
  type: SUPPORT_DVD_SUCCESS,
  payload: data
});

export const supportBdSuccess = (data) => ({
  type: SUPPORT_BD_SUCCESS,
  payload: data
});

export const supportUhdSuccess = (data) => ({
  type: SUPPORT_UHD_SUCCESS,
  payload: data
});
