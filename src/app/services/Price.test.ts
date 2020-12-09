import PriceService from './Price';

test('PriceService.calculateDiscount', () => {
  const discount = PriceService.calculateDiscounts([
    {
      quantity: 2,
      product: {
        id: 'prod1',
        name: 'prod1',
        price: 1100,
        promotions: [
          {
            id: 'promo1',
            type: 'FLAT_PERCENT',
            amount: 10,
          },
        ],
      },
    },
    {
      quantity: 4,
      product: {
        id: 'p2',
        name: 'p2',
        price: 500,
        promotions: [
          {
            id: 'promo2',
            type: 'BUY_X_GET_Y_FREE',
            required_qty: 2,
            free_qty: 1,
          },
        ],
      },
    },
    {
      quantity: 2,
      product: {
        id: '3',
        name: 'p3',
        price: 1099,
        promotions: [
          {
            id: 'promo3',
            type: 'QTY_BASED_PRICE_OVERRIDE',
            required_qty: 2,
            price: 1799,
          },
        ],
      },
    },
  ]);

  expect(discount).toBe(220 + 1000 + 399);
});

test('PriceService.calculatePrice', () => {
  const price = PriceService.calculatePrice([
    {
      quantity: 5,
      product: {
        id: '1',
        name: 'p1',
        price: 500,
      },
    },
    {
      quantity: 2,
      product: {
        id: '2',
        name: 'p2',
        price: 1500,
      },
    },
    {
      quantity: 1,
      product: {
        id: '3',
        name: 'p3',
        price: 2340,
      },
    },
  ]);

  expect(price).toBe(2500 + 3000 + 2340);
});
