// Core
import React from 'react';

// Instruments
import { BoookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BoookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BoookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
