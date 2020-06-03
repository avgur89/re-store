// Types
import * as types from './types';

export const booksLoaded = (newBooks) => ({
  type: types.BOOKS_LOADED,
  payload: newBooks,
});

export const booksRequested = () => ({ type: types.BOOKS_REQUESTED });

export const booksError = (error) => ({
  type: types.BOOKS_ERROR,
  payload: error,
});
