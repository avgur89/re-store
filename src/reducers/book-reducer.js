// Types
import * as types from '../actions/types';

const initialState = {
  books: [],
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOKS_LOADED:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
