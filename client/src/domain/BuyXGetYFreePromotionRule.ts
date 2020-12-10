import Product from './Product';
import Promotion from './Promotion';
import { PromotionRule } from './PromotionRule';

export default class BuyXGetYFreePromotionRule implements PromotionRule {
  calculate(promotion: Promotion, product: Product, quantity: number) {
    return (
      promotion.free_qty! *
      Math.floor(quantity / promotion.required_qty!) *
      product.price
    );
  }
}
