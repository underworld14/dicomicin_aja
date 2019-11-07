import {axios, api_url} from '../../api';
import * as types from '../types';

export const handleGetToons = () => ({
  type: types.GET_TOONS,
  payload: axios({
    method: 'GET',
    url: `${api_url}/webtoons`,
  }),
});
