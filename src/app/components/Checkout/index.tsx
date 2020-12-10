import React, { useState } from 'react';
import { useBasket } from '../../contexts/BasketContext';
import { Card, CardBody, CardHeader } from '../Card/styles';
import {
  CardInfoWrapper,
  CheckoutConfirmButton,
  CheckoutInput,
} from './styles';

const Checkout: React.FC = () => {
  const { items, doCheckout } = useBasket();

  const [holder, setHolder] = useState<string>('');
  const [card, setCard] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const canDoCheckout =
    items.length > 0 &&
    holder.trim().length > 0 &&
    card.trim().length > 0 &&
    cvv.trim().length > 0;

  const handleCardInput = (value: string) => {
    setCard(value);
  };

  const handleCvvInput = (value: string) => {
    setCvv(value);
  };

  const clearInputs = () => {
    setHolder('');
    setCard('');
    setCvv('');
  };

  const handleCheckoutRequest = async () => {
    const result = await doCheckout(holder, card, cvv);
    if (result) {
      clearInputs();
      alert('Thank you for your purchase!');
    } else {
      alert(
        'Something has gone wrong and we couldn`t process your payment. (Theres a 50% chance that this will work, please try again)'
      );
    }
  };

  return (
    <Card>
      <CardHeader>Checkout</CardHeader>
      <CardBody>
        <CheckoutInput
          placeholder='Card Holder'
          value={holder}
          onChange={e => setHolder(e.target.value)}
        />
        <CardInfoWrapper>
          <CheckoutInput
            placeholder='Card Number'
            value={card}
            onChange={e => handleCardInput(e.target.value)}
          />
          <CheckoutInput
            placeholder='CVV'
            value={cvv}
            onChange={e => handleCvvInput(e.target.value)}
          />
        </CardInfoWrapper>

        <CheckoutConfirmButton
          disabled={!canDoCheckout}
          onClick={handleCheckoutRequest}>
          Confirm Checkout
        </CheckoutConfirmButton>
      </CardBody>
    </Card>
  );
};

export default Checkout;
