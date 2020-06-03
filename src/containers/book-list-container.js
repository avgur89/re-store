// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Utils
import { compose } from '../utils';

// Actions
import { fetchBooks } from '../actions/book-actions';

// Components
import { withBookstoreService } from '../components/hoc';
import { Spinner } from '../components/spinner';
import { ErrorIndicator } from '../components/error-indicator';
import { BookList } from '../components/book-list';

class BookListContainer extends Component {
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

    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ book: { books, loading, error } }) => ({
  books,
  loading,
  error,
});

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
