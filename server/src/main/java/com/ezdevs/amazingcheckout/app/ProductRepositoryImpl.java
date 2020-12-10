package com.ezdevs.amazingcheckout.app;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import com.ezdevs.amazingcheckout.domain.AbstractPromotion;
import com.ezdevs.amazingcheckout.domain.BuyXGetYFreePromotion;
import com.ezdevs.amazingcheckout.domain.FlatPercentPromotion;
import com.ezdevs.amazingcheckout.domain.Product;
import com.ezdevs.amazingcheckout.domain.QuantityBasedPriceOverridePromotion;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    static final Map<String, Product> productsStore = new HashMap<>();

    static {
        productsStore.put("PWWe3w1SDU", new Product("PWWe3w1SDU", "Amazing Burger!", 999,
                List.<AbstractPromotion>of(new BuyXGetYFreePromotion("ZRAwbsO2qM", 1, 2))));

        productsStore.put("Dwt5F7KAhi",
                new Product("Dwt5F7KAhi", "Amazing Pizza!", 1099, List.<AbstractPromotion>of(
                        new QuantityBasedPriceOverridePromotion("ibt3EEYczW", 2, 1799))));

        productsStore.put("C8GDyLrHJb", new Product("C8GDyLrHJb", "Amazing Salad!", 499,
                List.<AbstractPromotion>of(new FlatPercentPromotion("Gm1piPn7Fg", 10))));

        productsStore.put("4MB7UfpTQs", new Product("4MB7UfpTQs", "Boring Fries!", 199, List.of()));
    }

    @Override
    public Flux<Product> findAll() {
        return Flux.fromIterable(productsStore.values());
    }

    @Override
    public Mono<Product> findOne(String id) {
        return Mono.justOrEmpty(Optional.ofNullable(productsStore.get(id)));
    }

}
