import FlatPercentPromotionRule from './FlatPercentPromotionRule';

test('Should apply flat percent discount on both items', () => {
  const promo = {
    id: 'promo1',
    type: 'FLAT_PERCENT',
    amount: 10,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 800,
  };

  const quantity = 2;
  const discounts = new FlatPercentPromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(160);
});

test('Should apply flat percent discount on all items', () => {
  const promo = {
    id: 'promo1',
    type: 'FLAT_PERCENT',
    amount: 10,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 800,
  };

  const quantity = 5;

  const discounts = new FlatPercentPromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(400);
});
