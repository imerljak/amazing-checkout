import React from 'react';
import Basket from '../../components/Basket';
import Checkout from '../../components/Checkout';
import { Container, Content } from './styles';

const Shop: React.FC = () => {
  return (
    <Container>
      <Content>
        <Basket />
        <Checkout />
      </Content>
    </Container>
  );
};

export default Shop;
