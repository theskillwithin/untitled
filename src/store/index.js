import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as Sentry from '@sentry/browser'
import createSentryMiddleware from 'redux-sentry-middleware'

import { IS_DEV, IS_STAGE } from '@sdog/utils/env'

import { reduxRegister } from './tools'
import apiActionMiddleware from './apiActionMiddleware'

Sentry.init({
  dsn: 'https://e7a4ea4c993e4619afcfc16dd9fe6b06@sentry.io/200333',
  environment: process.env.ENV,
})

const isBrowser = typeof window !== 'undefined'

const composeEnhancers =
  isBrowser && (IS_DEV || IS_STAGE) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) // eslint-disable-line no-underscore-dangle
    : compose

// generated combine reducers based off reducers passed in
// allow default store generated for initialSate (would be provided by server)
// allows data to be added into store before store is created :)
const reduxCombine = (reducers, initialState = {}) => {
  const reduxReducers = { ...reducers }
  const reducerNames = Object.keys(reducers)

  // if there is data pre-loaded into the store,
  // let's make a fake reducer so it does not yell,
  // we'll add the reducer later to support it using reduxRegister.register
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reduxReducers[item] = state => state
    }
  })

  return combineReducers(reduxReducers)
}

export default (storeData = {}, reducers = {}) => {
  reduxRegister.setInitialReducers(reducers)

  const store = createStore(
    reduxCombine(reducers, storeData),
    storeData,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        apiActionMiddleware,
        createSentryMiddleware(Sentry),
      ),
    ),
  )

  // replace redux store based on newely updated list of reducers
  reduxRegister.setChangeListener(updatedListOfReducers => {
    store.replaceReducer(reduxCombine(updatedListOfReducers, storeData))
  })

  return store
}
