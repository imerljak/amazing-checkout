package com.ezdevs.amazingcheckout.domain;

public abstract class AbstractPromotion {

    private final String id;
    private final PromotionType type;

    AbstractPromotion(final String id, final PromotionType type) {
        this.id = id;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public PromotionType getType() {
        return type;
    }
}
