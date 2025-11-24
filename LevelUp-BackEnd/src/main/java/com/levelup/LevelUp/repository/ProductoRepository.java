package com.levelup.LevelUp.repository;

import com.levelup.LevelUp.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{
    // Con esto se traen todos los metodos q nos sirven para hacer operaciones CRUD
}
