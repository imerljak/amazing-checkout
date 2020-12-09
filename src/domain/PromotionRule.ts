import BuyXGetYFreePromotionRule from './BuyXGetYFreePromotionRule';
import FlatPercentPromotionRule from './FlatPercentPromotionRule';
import Product from './Product';
import Promotion from './Promotion';
import QuantityBasedPriceOverridePromotionRule from './QuantityBasedPriceOverridePromotionRule';

export interface PromotionRule {
  calculate: (
    promotion: Promotion,
    product: Product,
    quantity: number
  ) => number;
}

export default class PromotionRuleFactory {
  private memoization: Map<string, PromotionRule> = new Map();

  private getMemoized(
    type: string,
    builder: () => PromotionRule
  ): PromotionRule {
    if (!this.memoization.has(type)) {
      this.memoization.set(type, builder());
    }

    return this.memoization.get(type)!;
  }

  public getFor(type: string): PromotionRule {
    if (type === 'BUY_X_GET_Y_FREE') {
      return this.getMemoized(type, () => new BuyXGetYFreePromotionRule());
    }

    if (type === 'FLAT_PERCENT') {
      return this.getMemoized(type, () => new FlatPercentPromotionRule());
    }

    if (type === 'QTY_BASED_PRICE_OVERRIDE') {
      return this.getMemoized(
        type,
        () => new QuantityBasedPriceOverridePromotionRule()
      );
    }

    throw new Error(`Unsupported promotion: ${type}`);
  }
}
