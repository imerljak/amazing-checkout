import React, { useState } from 'react';
import { useBasket } from '../../contexts/BasketContext';
import BasketListItem from '../BasketListItem';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/styles';
import { CodeInput, CodeSubmit, ItemsList } from './styles';

const Basket: React.FC = () => {
  const { items, addItem, removeItem } = useBasket();

  const [code, setCode] = useState<string>('');
  const [addStatus, setAddStatus] = useState<boolean>(true);

  const handleSubmitResult = (result: boolean) => {
    if (result) {
      setCode('');
    }

    setAddStatus(result);
  };

  const handleSubmit = () => {
    return addItem(code).then(handleSubmitResult);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      return handleSubmit();
    }
  };

  return (
    <Card>
      <CardHeader>Your Basket</CardHeader>
      <CardBody>
        <ItemsList>
          {items.length ? (
            items.map(it => (
              <BasketListItem
                key={it.product.id}
                amount={it.quantity}
                product={it.product.name}
                price={it.product.price}
              />
            ))
          ) : (
            <p>No items added to your basket yet :(</p>
          )}
        </ItemsList>
      </CardBody>
      <CardFooter>
        <CodeInput
          autoFocus
          type='text'
          value={code}
          placeholder='Product Code'
          onKeyDown={e => handleKeyDown(e)}
          onChange={e => setCode(e.target.value)}
        />
        <CodeSubmit onClick={handleSubmit}>ADD</CodeSubmit>
      </CardFooter>
    </Card>
  );
};

export default Basket;
