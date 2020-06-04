// Types
import * as types from './types';

export const booksRequested = () => ({ type: types.FETCH_BOOKS_REQUEST });

export const booksLoaded = (newBooks) => ({
  type: types.FETCH_BOOKS_SUCCESS,
  payload: newBooks,
});

export const booksError = (error) => ({
  type: types.FETCH_BOOKS_FAILURE,
  payload: error,
});

export const bookAddedToCart = (bookId) => ({
  type: types.BOOK_ADDED_TO_CART,
  payload: bookId,
});

export const bookRemovedFromCart = (bookId) => ({
  type: types.BOOK_REMOVED_FROM_CART,
  payload: bookId,
});

export const allBooksRemovedFromCart = (bookId) => ({
  type: types.ALL_BOOKS_REMOVED_FROM_CART,
  payload: bookId,
});

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};
