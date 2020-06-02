// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Utils
import { compose } from '../../utils';

// Actions
import { booksLoaded } from '../../actions/book-actions';

// Components
import { withBookstoreService } from '../hoc';
import { BookListItem } from '../book-list-item';
import { Spinner } from '../spinner';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;

    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
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

const mapStateToProps = ({ book: { books, loading } }) => ({
  books,
  loading,
});

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
