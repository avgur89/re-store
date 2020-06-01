// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Service
import { BookstoreService } from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

// Store
import { store } from './store';

// Components
import { App } from './components/app';
import { ErrorBoundry } from './components/error-boundry';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
