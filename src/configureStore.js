/*
Shape of state

{
  error: null,

  sort: ['new', 'best'],

  user: {
    // will we store auth token here too?
    id: 'eb81c150-8211-44e5-8913-2444e2bf71f5',
    username: 'overlord'
  },

  loggedIn: true,

  userSavedRecipes: [
    {
      id: 44,
      name: 'best damn brownies ever',
      summary: 'blah blah blah'
      ingredients: ['1 cup flour', '13 cups sugar', ...],
      instructions: ['step 1: do the thing', 'step 2: do the other thing', ...],
      nutrition: '1000 calories, 33g fat, ...'
    },
    {
      id: 200,
      name: string
      summary: string
      ingredients: array,
      instructions: array,
      nutrition: string
    }
  ],

  isFetching: false,
}

*/

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk),
  )
}