import React from 'react';
import { useBasket } from '../../contexts/BasketContext';
import { Card, CardBody, CardHeader } from '../Card/styles';
import {
  CardInfoWrapper,
  CheckoutConfirmButton,
  CheckoutInput,
} from './styles';

const Checkout: React.FC = () => {
  const { totalPrice, totalDiscount } = useBasket();

  return (
    <Card>
      <CardHeader>Checkout</CardHeader>
      <CardBody>
        <CheckoutInput placeholder='Card Holder' />
        <CardInfoWrapper>
          <CheckoutInput placeholder='Card Number' />
          <CheckoutInput placeholder='CVV' />
        </CardInfoWrapper>

        <CheckoutConfirmButton>Confirm Checkout</CheckoutConfirmButton>
      </CardBody>
    </Card>
  );
};

export default Checkout;
