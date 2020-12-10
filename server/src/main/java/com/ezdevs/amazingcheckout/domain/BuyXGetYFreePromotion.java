package com.ezdevs.amazingcheckout.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BuyXGetYFreePromotion extends AbstractPromotion {

    @JsonProperty("free_qty")
    private final int freeAmount;

    @JsonProperty("required_qty")
    private final int requiredAmount;

    public BuyXGetYFreePromotion(final String id, final int freeAmount, final int requiredAmount) {
        super(id, PromotionType.BUY_X_GET_Y_FREE);
        this.freeAmount = freeAmount;
        this.requiredAmount = requiredAmount;
    }

    public int getFreeAmount() {
        return freeAmount;
    }

    public int getRequiredAmount() {
        return requiredAmount;
    }

}
