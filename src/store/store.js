import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import AppReducer from '../reducers/AppReducer.js';

const reducer = combineReducers({
    AppReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
);

export default store;
