import axios from 'axios';
import config from '../../config-env';

export const fetchFav = res => {
  return {
    type: 'GET_ALL_FAVORITES_PENDING',
    payload: res,
    isLoading: true,
  };
};

export const fetchFavFulfilled = data => {
  return {
    type: 'GET_ALL_FAVORITES_FULFILLED',
    payload: data,
    isLoading: false,
  };
};

export const fetchFavRejected = error => {
  return {
    type: 'GET_ALL_FAVORITES_REJECTED',
    payload: error,
    isLoading: false,
  };
};

export const getFavToons = (id, token) => {
  return dispatch => {
    dispatch(fetchFav(true));
    axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: `${config.API_URL}/user/${id}/webtoon/favorites`,
    })
      .then(res => {
        dispatch(fetchFavFulfilled(res.data));
      })
      .catch(error => {
        dispatch(fetchFavRejected(error));
      });
  };
};
