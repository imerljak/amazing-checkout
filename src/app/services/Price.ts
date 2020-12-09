import BasketItem from '../../domain/BasketItem';
import PromotionRuleFactory from '../../domain/PromotionRule';

const PriceService = {
  calculateDiscounts: (items: BasketItem[]): number => {
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
  },

  calculatePrice: (items: BasketItem[]): number => {
    return items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
  },
};

export default PriceService;
