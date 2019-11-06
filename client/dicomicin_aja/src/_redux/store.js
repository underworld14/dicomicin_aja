import {createStore, applyMiddleware} from 'redux';
import {Logger, Thunk} from './middleware';

import {AppReducers} from '../_reducers/index';

const middlewares = applyMiddleware(Logger, Thunk);

const store = createStore(AppReducers, middlewares);

export default store;
