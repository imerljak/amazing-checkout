import React from 'react';
import { useBasket } from '../../contexts/BasketContext';
import Money from '../Money';

// import { Container } from './styles';

const Checkout: React.FC = () => {
  const { totalPrice, totalDiscount } = useBasket();

  return (
    <div>
      <p>
        Raw price: <Money value={totalPrice} />
      </p>
      <p>
        Discounts: <Money value={totalDiscount} />
      </p>
      <p>
        Paypable: <Money value={totalPrice - totalDiscount} />
      </p>
    </div>
  );
};

export default Checkout;
