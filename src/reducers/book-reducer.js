// Types
import * as types from '../actions/types';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
    },
  ],
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
