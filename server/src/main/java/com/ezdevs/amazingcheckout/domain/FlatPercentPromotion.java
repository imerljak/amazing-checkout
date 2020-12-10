package com.ezdevs.amazingcheckout.domain;

public class FlatPercentPromotion extends AbstractPromotion {

    private final int amount;

    public FlatPercentPromotion(final String id, final int amount) {
        super(id, PromotionType.FLAT_PERCENT);
        this.amount = amount;
    }

    public int getAmount() {
        return amount;
    }

}
