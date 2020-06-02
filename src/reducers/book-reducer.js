// Types
import * as types from '../actions/types';

const initialState = {
  books: [],
  loading: true,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOKS_LOADED:
      return {
        books: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
