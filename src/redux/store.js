import { quoteReducer } from './reducers/quote';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import mySaga from '../saga/saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


const rootReducer = combineReducers({
   quote: quoteReducer,
});

// create and configure the store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));



sagaMiddleware.run(mySaga)