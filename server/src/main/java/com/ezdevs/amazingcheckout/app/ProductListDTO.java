package com.ezdevs.amazingcheckout.app;

import com.ezdevs.amazingcheckout.domain.Product;

public class ProductListDTO {

    private final String id;
    private final String name;
    private final int price;

    public ProductListDTO(final String id, final String name, final int price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public ProductListDTO(final Product product) {
        this(product.getId(), product.getName(), product.getPrice());
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

}
