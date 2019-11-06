import axios from 'axios';
import config from '../../config-env';

export const fetchEpisodes = res => {
  return {
    type: 'GET_ALL_EPISODES_PENDING',
    payload: res,
    isLoading: true,
  };
};

export const fetchEpisodesFulfilled = data => {
  return {
    type: 'GET_ALL_EPISODES_FULFILLED',
    payload: data,
    isLoading: false,
  };
};

export const fetchEpisodesRejected = error => {
  return {
    type: 'GET_ALL_EPISODES_REJECTED',
    payload: error,
    isLoading: false,
  };
};

export const getAllEpisodes = (idToon, idEps) => {
  return dispatch => {
    dispatch(fetchEpisodes(true));
    axios
      .get(`${config.API_URL}/webtoon/${idToon}/episode/${idEps}`)
      .then(res => {
        dispatch(fetchEpisodesFulfilled(res.data));
      })
      .catch(error => {
        dispatch(fetchEpisodesRejected(error));
      });
  };
};
