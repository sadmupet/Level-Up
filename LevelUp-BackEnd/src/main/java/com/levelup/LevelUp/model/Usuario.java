package com.levelup.LevelUp.model;

import jakarta.persistence.*;
import io.swagger.v3.oas.annotations.media.Schema;

@Entity
@Table(name = "usuarios")
@Schema(description = "Modelo de usuario del sistema")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "ID único del usuario", example = "1", accessMode = Schema.AccessMode.READ_ONLY)
    private Long id;

    @Column(nullable = false, unique = true)
    @Schema(description = "Email del usuario (único)", example = "usuario@ejemplo.com", required = true)
    private String email; 

    @Column(nullable = false)
    @Schema(description = "Contraseña del usuario", example = "miPassword123", required = true)
    private String password; 

    @Schema(description = "Edad del usuario", example = "25")
    private Integer edad; 

    @Schema(description = "Rol del usuario en el sistema", example = "CLIENTE", defaultValue = "CLIENTE")
    private String rol; 

    public Usuario() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public Integer getEdad() { return edad; }
    public void setEdad(Integer edad) { this.edad = edad; }

    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }
}