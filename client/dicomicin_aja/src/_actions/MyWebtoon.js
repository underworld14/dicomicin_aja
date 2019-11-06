import axios from 'axios';
import config from '../../config-env';

export const fetchMyWebtoons = res => {
  return {
    type: 'GET_ALL_MYWEBTOONS_PENDING',
    payload: res,
    isLoading: true,
  };
};

export const fetchMyWebtoonsFulfilled = data => {
  return {
    type: 'GET_ALL_MYWEBTOONS_FULFILLED',
    payload: data,
    isLoading: false,
  };
};

export const fetchMyWebtoonsRejected = error => {
  return {
    type: 'GET_ALL_MYWEBTOONS_REJECTED',
    payload: error,
    isLoading: false,
  };
};

export const getMyWebtoons = (userId, token) => {
  return dispatch => {
    dispatch(fetchMyWebtoons(true));
    axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: `${config.API_URL}/user/${userId}/webtoons`,
    })
      .then(res => {
        dispatch(fetchMyWebtoonsFulfilled(res.data));
      })
      .catch(error => {
        dispatch(fetchMyWebtoonsRejected(error));
      });
  };
};
