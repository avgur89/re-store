// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Utils
import { compose } from '../utils';

// Actions
import { fetchBooks, bookAddedToCart } from '../actions/book-actions';

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
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({
  books,
  loading,
  error,
});

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
