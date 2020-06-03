// Types
import * as types from '../actions/types';

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case types.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case types.BOOK_ADDED_TO_CART:
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    default:
      return state;
  }
};
