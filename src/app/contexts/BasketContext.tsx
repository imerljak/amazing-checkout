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
  addItem: (code: string) => Promise<boolean>;
  removeItem: (code: string) => Promise<boolean>;
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

  const addNewProduct = async (code: string): Promise<boolean> => {
    if (!code || code.trim() === '') {
      return false;
    }

    try {
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

        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
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

  const addItem = async (code: string): Promise<boolean> => {
    const { items } = state;

    if (!items[code]) {
      return addNewProduct(code);
    }

    await incrementExistingProduct(code);
    return true;
  };

  const removeItem = async (code: string): Promise<boolean> => {
    // TODO
    return false;
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
