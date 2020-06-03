// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Utils
import { compose } from '../../utils';

// Actions
import {
  booksLoaded,
  booksRequested,
  booksError,
} from '../../actions/book-actions';

// Components
import { withBookstoreService } from '../hoc';
import { BookListItem } from '../book-list-item';
import { Spinner } from '../spinner';
import { ErrorIndicator } from '../error-indicator';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ book: { books, loading, error } }) => ({
  books,
  loading,
  error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    },
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
