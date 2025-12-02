package com.levelup.LevelUp.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI levelUpAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Level-Up Gaming Store API")
                        .version("1.0.0")
                        .description("API REST para la tienda gaming Level-Up - Sistema de gestión de usuarios, productos y pedidos")
                        .contact(new Contact()
                                .name("Equipo Level-Up")
                                .email("contacto@levelup.com")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8080")
                                .description("Servidor de desarrollo")
                ));
    }
}