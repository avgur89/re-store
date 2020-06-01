// Core
import { combineReducers } from 'redux';

// Reducers
import { bookReducer } from './book-reducer.js';

export const rootReducer = combineReducers({
  book: bookReducer,
});
