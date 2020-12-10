package com.ezdevs.amazingcheckout.domain;

import java.util.List;

public class Product {
	private final String id;
	private final String name;
	private final int price;
	private final List<AbstractPromotion> promotions;

	public Product(final String id, final String name, final int price,
			final List<AbstractPromotion> promotions) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.promotions = promotions;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getPrice() {
		return price;
	}

	public List<AbstractPromotion> getPromotions() {
		return promotions;
	}
}
