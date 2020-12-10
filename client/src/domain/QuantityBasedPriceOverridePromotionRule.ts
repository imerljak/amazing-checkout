import Product from './Product';
import Promotion from './Promotion';
import { PromotionRule } from './PromotionRule';

export default class QuantityBasedPriceOverridePromotionRule
  implements PromotionRule {
  calculate(promotion: Promotion, product: Product, quantity: number) {
    return (
      Math.floor(quantity / promotion.required_qty!) *
      (product.price * promotion.required_qty! - promotion.price!)
    );
  }
}
