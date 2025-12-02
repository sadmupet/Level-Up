package com.levelup.LevelUp.controller;

import com.levelup.LevelUp.model.Usuario;
import com.levelup.LevelUp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@Tag(name = "Autenticación", description = "Gestión de autenticación y registro de usuarios")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // SWAGGER DOCUMENTATION
    @Operation(
        summary = "Iniciar sesión",
        description = "Autenticación de usuario mediante email y contraseña. Retorna los datos del usuario si las credenciales son correctas."
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Login exitoso - Retorna datos del usuario",
            content = @Content(mediaType = "application/json")
        ),
        @ApiResponse(
            responseCode = "401",
            description = "Credenciales incorrectas",
            content = @Content(mediaType = "text/plain")
        )
    })

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario loginRequest) {
        Usuario usuario = usuarioRepository.findByEmail(loginRequest.getEmail());

        if (usuario != null && usuario.getPassword().equals(loginRequest.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("id", usuario.getId());
            response.put("email", usuario.getEmail());
            response.put("rol", usuario.getRol());
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Correo o contraseña incorrectos");
    }

    // SWAGGER DOCUMENTATION
    @Operation(
        summary = "Registrar nuevo usuario",
        description = "Crea una nueva cuenta de usuario. El rol por defecto es 'CLIENTE' y se valida que el email no esté registrado previamente."
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Usuario registrado exitosamente",
            content = @Content(mediaType = "text/plain")
        ),
        @ApiResponse(
            responseCode = "400",
            description = "Email ya registrado o datos inválidos (edad menor a 18 años)",
            content = @Content(mediaType = "text/plain")
        )
    })

    @PostMapping("/register")
    public ResponseEntity<?> register(
        @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Datos del nuevo usuario",
            required = true,
            content = @Content(
                schema = @Schema(implementation = Usuario.class)
            )
        )
        @RequestBody Usuario usuario
    ) {
        if (usuarioRepository.findByEmail(usuario.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Este correo ya está registrado.");
        }

        if (usuario.getEdad() != null && usuario.getEdad() < 18) {
             return ResponseEntity.badRequest().body("Debes tener al menos 18 años.");
        }

        if (usuario.getRol() == null) {
            usuario.setRol("CLIENTE");
        }

        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }
}