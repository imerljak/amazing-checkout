import Product from './Product';
import Promotion from './Promotion';
import { PromotionRule } from './PromotionRule';

export default class FlatPercentPromotionRule implements PromotionRule {
  calculate(promotion: Promotion, product: Product, quantity: number) {
    return Math.floor(product.price * (promotion.amount! / 100)) * quantity;
  }
}
