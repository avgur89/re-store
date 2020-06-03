// Types
import * as types from '../actions/types';

const initialState = {
  books: [],
  loading: true,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOKS_REQUESTED:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case types.BOOKS_LOADED:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case types.BOOKS_ERROR:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
