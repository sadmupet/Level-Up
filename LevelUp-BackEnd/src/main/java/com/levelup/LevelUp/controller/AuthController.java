package com.levelup.LevelUp.controller;

import com.levelup.LevelUp.model.Usuario;
import com.levelup.LevelUp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@Tag(name = "Autenticación")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // --- LOGIN ---
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

    // --- REGISTRO ---
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        // 1. Validar si el email ya existe
        if (usuarioRepository.findByEmail(usuario.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Este correo ya está registrado.");
        }

        if (usuario.getEdad() != null && usuario.getEdad() < 18) {
             return ResponseEntity.badRequest().body("Debes tener al menos 13 años.");
        }

        // 3. Asignar Rol por defecto
        if (usuario.getRol() == null) {
            usuario.setRol("CLIENTE");
        }

        // 4. Guardar
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }
}