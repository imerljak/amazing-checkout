import { createContext, useState } from 'react';
import Product from '../../domain/Product';

interface BasketItem {
  quantity: number;
  product: Product;
}

interface BasketContextState {
  items: Set<BasketItem>;
  totalPrice: number;
  totalDiscount: number;
}

const BasketContext = createContext<BasketContextState>(
  {} as BasketContextState
);

const BasketContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<BasketContextState>({
    items: new Set<BasketItem>(),
    totalPrice: 0,
    totalDiscount: 0,
  });

  return (
    <BasketContext.Provider
      value={{
        items: state.items,
        totalPrice: state.totalPrice,
        totalDiscount: state.totalDiscount,
      }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContextProvider };
