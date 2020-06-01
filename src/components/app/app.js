// Core
import React from 'react';

// HOC
import { withBookstoreService } from '../hoc';

import './app.css';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());

  return (
    <div className="container">
      <h1>App</h1>
    </div>
  );
};

export default withBookstoreService()(App);
