import {combineReducers} from 'redux';

import toons from './Toons';
import favorites from './Favorites';
import details from './Details';
import episodes from './Episodes';
import mywebtoons from './MyWebtoon';

export const AppReducers = combineReducers({
  toons,
  favorites,
  details,
  episodes,
  mywebtoons,
});
