import {axios, api_url} from '../../api';
import * as types from '../types';

export const handleGetFavs = (token, userId) => ({
  type: types.GET_FAVS,
  payload: axios({
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/${userId}/webtoon/favorites`,
  }),
});

// export const handlePostFavs = (token, userId) => ({
//   type: types.POST_FAVS,
//   payload: axios({
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     url: `${api_url}/user/${userId}/webtoon/favorites`,
//   }),
// });
