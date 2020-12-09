import { createContext, useContext, useState } from 'react';
import Product from '../../domain/Product';

interface BasketItem {
  quantity: number;
  product: Product;
}

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

  const addItem = async (code: string) => {
    // todo
  };

  const removeItem = async (code: string) => {
    // todo
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
