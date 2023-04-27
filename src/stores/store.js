import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from 'redux'
import msgReducer from '../reducers/msgReducer'
import userReducer from '../reducers/userReducer'
import thunk from "redux-thunk";
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = configureStore(
    combineReducers( {
        msg: msgReducer,
        user: userReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;