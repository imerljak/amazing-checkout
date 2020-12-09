import React, { useState } from 'react';
import { useBasket } from '../../contexts/BasketContext';

// import { Container } from './styles';

const Basket: React.FC = () => {
  const { items, addItem, removeItem } = useBasket();

  const [code, setCode] = useState<string>('');

  const handleSubmit = () => {
    const future = addItem(code).then(() => setCode(''));
  };

  return (
    <div className='App'>
      <input type='text' value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {items.map(it => (
        <li key={it.product.id}>
          {it.quantity} - {it.product.name}
        </li>
      ))}
    </div>
  );
};

export default Basket;
