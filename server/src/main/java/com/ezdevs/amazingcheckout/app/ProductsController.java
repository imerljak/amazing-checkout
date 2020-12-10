package com.ezdevs.amazingcheckout.app;

import com.ezdevs.amazingcheckout.domain.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/products")
public class ProductsController {


    private final ProductRepository repository;

    public ProductsController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public Flux<ProductListDTO> findAll() {
        return repository.findAll().map(ProductListDTO::new);
    }

    @GetMapping("/{id}")
    public Mono<Product> findOne(@PathVariable String id) {
        return repository.findOne(id);
    }

}
