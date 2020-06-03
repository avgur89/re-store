// Core
import React from 'react';

// Components
import { BookListContainer } from '../../containers';
import { ShoppingCartTable } from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
