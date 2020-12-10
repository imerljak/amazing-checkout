package com.ezdevs.amazingcheckout.app;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.List;
import com.ezdevs.amazingcheckout.domain.BuyXGetYFreePromotion;
import com.ezdevs.amazingcheckout.domain.Product;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@ExtendWith(SpringExtension.class)
@WebFluxTest(controllers = ProductsController.class)
public class ProductsControllerTest {

    @MockBean
    ProductRepository repository;

    @Autowired
    private WebTestClient testClient;

    @Test
    void testVerifyGetAllProductsPayload() {
        when(repository.findAll()).thenReturn(Flux.fromIterable(List.<Product>of(
            new Product(
                "id",
                "test_product",
                500,
                List.of()
            )
        )));

        testClient.get()
            .uri("/products")
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .jsonPath("[0].id").isNotEmpty()
            .jsonPath("[0].name").isNotEmpty()
            .jsonPath("[0].price").isNumber()
            .jsonPath("[0].promotions").doesNotExist();

        verify(repository, times(1)).findAll();
    }

    @Test
    void testVerifyGetSingleProductPayload() {
        when(repository.findOne("abc")).thenReturn(Mono.just(new Product(
                "abc",
                "test_product",
                500,
                List.of(new BuyXGetYFreePromotion("xxx", 1, 2))
            )
        ));

        testClient.get()
            .uri("/products/abc")
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .jsonPath("$.id").isNotEmpty()
            .jsonPath("$.name").isNotEmpty()
            .jsonPath("$.price").isNumber()
            .jsonPath("$.promotions").isArray()
            .jsonPath("$.promotions[0].id").isNotEmpty()
            .jsonPath("$.promotions[0].free_qty").isNumber()
            .jsonPath("$.promotions[0].required_qty").isNumber();

        verify(repository, times(1)).findOne("abc");
    }
    
}
