// Core
import React from 'react';

// Components
import { ErrorBoundry } from '../error-boundry';

import './app.css';

const App = () => {
  return (
    <ErrorBoundry>
      <div className="container">
        <h1>App</h1>
      </div>
    </ErrorBoundry>
  );
};

export default App;
