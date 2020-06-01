// Types
import * as types from './types';

export const booksLoaded = (newBooks) => ({
  type: types.BOOKS_LOADED,
  payload: newBooks,
});
