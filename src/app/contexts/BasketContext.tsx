import { createContext, useContext, useEffect, useState } from 'react';
import BasketItem from '../../domain/BasketItem';
import PriceService from '../services/Price';
import ProductService from '../services/Products';

interface BasketContextState {
  items: {
    [key: string]: BasketItem;
  };
  totalPrice: number;
  totalDiscount: number;
}

interface BasketContextProps {
  items: BasketItem[];
  totalPrice: number;
  totalDiscount: number;
  addItem: (code: string) => Promise<void>;
  removeItem: (code: string) => Promise<void>;
}

const BasketContext = createContext<BasketContextProps>(
  {} as BasketContextProps
);

const BasketContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<BasketContextState>({
    items: {},
    totalPrice: 0,
    totalDiscount: 0,
  });

  useEffect(() => {
    const basketItems = Object.values(state.items);

    const discount = PriceService.calculateDiscounts(basketItems);
    const price = PriceService.calculatePrice(basketItems);

    setState(s => ({
      ...s,
      totalPrice: price,
      totalDiscount: discount,
    }));
  }, [state.items]);

  const addNewProduct = async (code: string) => {
    if (!code || code.trim() === '') {
      return;
    }

    const product = await ProductService.fetch(code);

    if (product) {
      setState(s => ({
        ...s,
        items: {
          ...s.items,
          [code]: {
            quantity: 1,
            product,
          },
        },
      }));
    }
  };

  const incrementExistingProduct = async (code: string) => {
    setState(s => ({
      ...s,
      items: {
        ...s.items,
        [code]: {
          ...s.items[code],
          quantity: s.items[code].quantity + 1,
        },
      },
    }));
  };

  const addItem = async (code: string) => {
    const { items } = state;

    if (!items[code]) {
      return addNewProduct(code);
    }

    return incrementExistingProduct(code);
  };

  const removeItem = async (code: string) => {
    // TODO
  };

  return (
    <BasketContext.Provider
      value={{
        items: Object.values(state.items),
        totalPrice: state.totalPrice,
        totalDiscount: state.totalDiscount,
        addItem,
        removeItem,
      }}>
      {children}
    </BasketContext.Provider>
  );
};

const useBasket = (): BasketContextProps => {
  const ctx = useContext(BasketContext);

  if (!ctx) {
    throw new Error('useBasket must be used withing a BasketContextProvider');
  }

  return ctx;
};

export { BasketContextProvider, useBasket };
