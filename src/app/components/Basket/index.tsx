import React, { useState } from 'react';
import { useBasket } from '../../contexts/BasketContext';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/styles';
import { CodeInput, CodeSubmit, ItemsList } from './styles';

const Basket: React.FC = () => {
  const { items, addItem, removeItem } = useBasket();

  const [code, setCode] = useState<string>('');

  const handleSubmit = () => {
    const future = addItem(code).then(() => setCode(''));
  };

  return (
    <Card>
      <CardHeader>Your Basket</CardHeader>
      <CardBody>
        <ItemsList>
          {items.length ? (
            items.map(it => (
              <p key={it.product.id}>
                {it.quantity}x {it.product.name}
              </p>
            ))
          ) : (
            <p>No items added to your basket yet :(</p>
          )}
        </ItemsList>
      </CardBody>
      <CardFooter>
        <CodeInput
          type='text'
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <CodeSubmit onClick={handleSubmit}>ADD</CodeSubmit>
      </CardFooter>
    </Card>
  );
};

export default Basket;
