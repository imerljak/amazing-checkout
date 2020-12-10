package com.ezdevs.amazingcheckout.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class QuantityBasedPriceOverridePromotion extends AbstractPromotion {

    @JsonProperty("required_qty")
    private final int requiredAmount;

    private final int price;

    public QuantityBasedPriceOverridePromotion(final String id, final int requiredAmount,
            final int price) {
        super(id, PromotionType.QTY_BASED_PRICE_OVERRIDE);
        this.requiredAmount = requiredAmount;
        this.price = price;
    }

    public int getRequiredAmount() {
        return requiredAmount;
    }

    public int getPrice() {
        return price;
    }

}
