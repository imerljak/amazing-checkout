import React from 'react';
import { useBasket } from '../../contexts/BasketContext';
import { Card, CardBody, CardHeader } from '../Card/styles';
import Money from '../Money';
import { BasketItem } from './styles';

const Totals: React.FC = () => {
  const { totalPrice, totalDiscount } = useBasket();

  return (
    <Card>
      <CardHeader>Expected Totals</CardHeader>
      <CardBody>
        <BasketItem>
          <p>Raw Price: </p> <Money value={totalPrice} />
        </BasketItem>
        <BasketItem>
          <p>Discounts: </p> <Money value={totalDiscount} />
        </BasketItem>
        <BasketItem>
          <p>Payable: </p> <Money value={totalPrice - totalDiscount} />
        </BasketItem>
      </CardBody>
    </Card>
  );
};

export default Totals;
