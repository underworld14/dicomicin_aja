import axios from 'axios';
import config from '../../config-env';

export const fetchDetails = res => {
  return {
    type: 'GET_ALL_DETAILS_PENDING',
    payload: res,
    isLoading: true,
  };
};

export const fetchDetailsFulfilled = data => {
  return {
    type: 'GET_ALL_DETAILS_FULFILLED',
    payload: data,
    isLoading: false,
  };
};

export const fetchDetailsRejected = error => {
  return {
    type: 'GET_ALL_DETAILS_REJECTED',
    payload: error,
    isLoading: false,
  };
};

export const getAllDetails = id => {
  return dispatch => {
    dispatch(fetchDetails(true));
    axios
      .get(`${config.API_URL}/webtoon/${id}/episodes`)
      .then(res => {
        dispatch(fetchDetailsFulfilled(res.data));
      })
      .catch(error => {
        dispatch(fetchDetailsRejected(error));
      });
  };
};
