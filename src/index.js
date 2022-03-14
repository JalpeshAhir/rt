import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user_context';
import { HomeProvider } from './context/home_context';
import { ProductsProvider } from './context/products_context';

ReactDOM.render(

  <UserProvider>
    <HomeProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </HomeProvider>
  </UserProvider>,

  document.getElementById('root'));