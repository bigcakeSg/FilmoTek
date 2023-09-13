import axios from 'axios';
import {
  supportBdSuccess,
  supportDvdSuccess,
  supportLdSuccess,
  supportUhdSuccess,
  supportVhsSuccess
} from './actions';

export const getSupportVhs = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/support/vhs');

    dispatch(supportVhsSuccess(data));
  };
};

export const getSupportLd = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/support/ld');

    dispatch(supportLdSuccess(data));
  };
};

export const getSupportDvd = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/support/dvd');

    dispatch(supportDvdSuccess(data));
  };
};

export const getSupportBd = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/support/bd');

    dispatch(supportBdSuccess(data));
  };
};

export const getSupportUhd = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/support/uhd');

    dispatch(supportUhdSuccess(data));
  };
};

export const getAllSupports = () => {
  return async (dispatch) => {
    await Promise.all([
      dispatch(getSupportVhs()),
      dispatch(getSupportLd()),
      dispatch(getSupportDvd()),
      dispatch(getSupportBd()),
      dispatch(getSupportUhd())
    ]);
  };
};

export const patchSupports = (movieId, supports) => {
  return async (dispatch) => {
    try {
      await axios.patch(
        `http://localhost:5000/support/movie/${movieId}`,
        supports
      );

      dispatch(getAllSupports());
    } catch (error) {
      //
    }
  };
};

export const patchSingleSupports = (movieId, support, alreadyExists) => {
  return async (dispatch) => {
    try {
      await axios.patch(
        `http://localhost:5000/support/movie/${movieId}/support/${support}`,
        { alreadyExists }
      );

      await dispatch(getAllSupports());
    } catch (error) {
      //
    }
  };
};
