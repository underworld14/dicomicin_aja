import {combineReducers} from 'redux';

import reducersWebtoons from './webtoons';
import reducersFavorites from './favorites';
import reducersEpisodes from './episodes';
import reducersPages from './pages';

export const AppReducers = combineReducers({
  webtoons: reducersWebtoons,
  favorites: reducersFavorites,
  episodes: reducersEpisodes,
  pages: reducersPages,
});
