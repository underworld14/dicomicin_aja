import axios from 'axios';
import config from '../../config-env';

export const fetchData = res => {
  return {
    type: 'GET_ALL_TOONS_PENDING',
    payload: res,
    isLoading: true,
  };
};

export const fetchDataFulfilled = data => {
  return {
    type: 'GET_ALL_TOONS_FULFILLED',
    payload: data,
    isLoading: false,
  };
};

export const fetchDataRejected = error => {
  return {
    type: 'GET_ALL_TOONS_REJECTED',
    payload: error,
    isLoading: false,
  };
};

export const getAllToons = () => {
  return dispatch => {
    dispatch(fetchData(true));
    axios({
      method: 'GET',
      url: `${config.API_URL}/webtoons`,
    })
      .then(res => {
        dispatch(fetchDataFulfilled(res.data));
      })
      .catch(error => {
        dispatch(fetchDataRejected(error));
      });
  };
};
