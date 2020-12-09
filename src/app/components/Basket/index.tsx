import React from 'react';
import { useBasket } from '../../contexts/BasketContext';

// import { Container } from './styles';

const Basket: React.FC = () => {
  const { items, addItem, removeItem } = useBasket();

  return (
    <div className='App'>
      {items.map(it => (
        <li key={it.product.id}>
          {it.quantity} - {it.product.name}
        </li>
      ))}
    </div>
  );
};

export default Basket;
