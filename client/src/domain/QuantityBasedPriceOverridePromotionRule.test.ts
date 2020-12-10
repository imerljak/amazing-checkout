import QuantityBasedPriceOverridePromotionRule from './QuantityBasedPriceOverridePromotionRule';

test('Should not apply discount when below required_qty', () => {
  const promo = {
    id: 'promo1',
    type: 'QTY_BASED_PRICE_OVERRIDE',
    required_qty: 2,
    price: 1799,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 1099,
  };

  const quantity = 1;
  const discounts = new QuantityBasedPriceOverridePromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(0);
});

test('Should Apply discount on minimum required_qty', () => {
  const promo = {
    id: 'promo1',
    type: 'QTY_BASED_PRICE_OVERRIDE',
    required_qty: 2,
    price: 1799,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 1099,
  };

  const quantity = 2;
  const discounts = new QuantityBasedPriceOverridePromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(399);
});

test('Should Apply discount only on applicable items', () => {
  const promo = {
    id: 'promo1',
    type: 'QTY_BASED_PRICE_OVERRIDE',
    required_qty: 2,
    price: 1799,
  };

  const product = {
    id: 'abc',
    name: 'test',
    price: 1099,
  };

  const quantity = 5;

  const discounts = new QuantityBasedPriceOverridePromotionRule().calculate(
    promo,
    product,
    quantity
  );

  expect(discounts).toBe(798);
});
