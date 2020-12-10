import BuyXGetYFreePromotionRule from './BuyXGetYFreePromotionRule';

test('Should discount price of free_qty when applicable', () => {
  const promo = {
    id: 'promo1',
    type: 'BUY_X_GET_Y_FREE',
    required_qty: 2,
    free_qty: 1,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 800,
  };

  const quantity = 2;
  const discounts = new BuyXGetYFreePromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(800);
});

test('Should only discount price of items that sum up the required_qty', () => {
  const promo = {
    id: 'promo1',
    type: 'BUY_X_GET_Y_FREE',
    required_qty: 2,
    free_qty: 1,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 800,
  };

  const quantity = 5;

  const discounts = new BuyXGetYFreePromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(1600);
});
