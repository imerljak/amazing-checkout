package com.ezdevs.amazingcheckout.app;

import com.ezdevs.amazingcheckout.domain.Product;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductRepository {

    Flux<Product> findAll();

    Mono<Product> findOne(final String id);

}
