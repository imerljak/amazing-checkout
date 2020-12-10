import React from 'react';
import Money from '../Money';
import { Container, ItemAmount, ItemName, ItemPrice } from './styles';

interface BasketListItemProps {
  amount: number;
  product: string;
  price: number;
}

const BasketListItem: React.FC<BasketListItemProps> = ({
  amount,
  product,
  price,
}) => {
  return (
    <Container>
      <ItemAmount>{amount}x</ItemAmount>
      <ItemName>{product}</ItemName>
      <ItemPrice>
        <Money value={price} />
      </ItemPrice>
    </Container>
  );
};

export default BasketListItem;
