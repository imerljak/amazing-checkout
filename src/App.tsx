import React from 'react';
import './App.css';
import { BasketContextProvider } from './app/contexts/BasketContext';
import Shop from './app/pages/Shop';

const App: React.FC = () => {
  return (
    <BasketContextProvider>
      <Shop />
    </BasketContextProvider>
  );
};

export default App;
