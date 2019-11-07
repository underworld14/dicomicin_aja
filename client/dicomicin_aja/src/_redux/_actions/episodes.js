import {axios, api_url} from '../../api';
import * as types from '../types';

export const handleGetEps = toonId => ({
  type: types.GET_EPS,
  payload: axios({
    method: 'GET',
    url: `${api_url}/webtoon/${toonId}/episodes`,
  }),
});
