import Axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Product from '../../domain/Product';
import PromotionRuleFactory from '../../domain/PromotionRule';

const fetchProduct = async (code: string): Promise<Product | void> => {
  return Axios.get<Product>(`/products/${code}`).then(result => result.data);
};

const calculateDiscounts = (items: BasketItem[]): number => {
  return items.reduce((acc, it) => {
    const { quantity, product } = it;

    if (!product.promotions || !product.promotions.length) {
      return acc;
    }

    const ruleFactory = new PromotionRuleFactory();

    return (
      acc +
      product.promotions.reduce((sum, promo) => {
        const rule = ruleFactory.getFor(promo.type);
        return sum + rule.calculate(promo, product, quantity);
      }, 0)
    );
  }, 0);
};

const calculatePrice = (items: BasketItem[]): number => {
  return items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
};

// ========================

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

  useEffect(() => {
    const basketItems = Object.values(state.items);

    const discount = calculateDiscounts(basketItems);
    const price = calculatePrice(basketItems);

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

    const product = await fetchProduct(code);

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
