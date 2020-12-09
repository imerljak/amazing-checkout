import React from 'react';
import Basket from '../../components/Basket';
import Checkout from '../../components/Checkout';

// import { Container } from './styles';

const Shop: React.FC = () => {
  return (
    <>
      <div>
        <Basket />
      </div>
      <div>
        <Checkout />
      </div>
    </>
  );
};

export default Shop;
