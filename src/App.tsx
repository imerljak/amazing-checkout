import React from 'react';
import './App.css';
import { BasketContextProvider } from './app/contexts/BasketContext';
import Cart from './app/pages/Cart';

function App() {
  return (
    <BasketContextProvider>
      <Cart />
    </BasketContextProvider>
  );
}

export default App;
