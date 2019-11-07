import {createStore} from 'redux';
import middlewares from './middleware';
import {AppReducers} from './_reducers/index';

const store = createStore(AppReducers, middlewares);

export default store;
