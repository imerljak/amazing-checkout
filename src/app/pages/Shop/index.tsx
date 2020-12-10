import React from 'react';
import Basket from '../../components/Basket';
import Checkout from '../../components/Checkout';
import Totals from '../../components/Totals';
import { Container, Content } from './styles';

const Shop: React.FC = () => {
  return (
    <Container>
      <Content>
        <Basket />
        <Totals />
        <Checkout />
      </Content>
    </Container>
  );
};

export default Shop;
