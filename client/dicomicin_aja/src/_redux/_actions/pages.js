import {axios, api_url} from '../../api';
import * as types from '../types';

export const handleGetPages = (toonId, epsId) => ({
  type: types.GET_PAGES,
  payload: axios({
    method: 'GET',
    url: `${api_url}/webtoon/${toonId}/episode/${epsId}`,
  }),
});
