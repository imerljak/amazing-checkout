import Product from './Product';
import Promotion from './Promotion';

interface DiscountRule {
  calculate: (
    promotion: Promotion,
    product: Product,
    quantity: number
  ) => number;
}
