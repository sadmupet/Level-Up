import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from '../css/Productos.module.css'

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  const productosFiltrados = categoria
    ? productos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase())
    : productos;

  const formatPrecio = (precio) => {
    if (!precio || isNaN(precio)) return "0";
    return precio.toLocaleString("es-CL", { minimumFractionDigits: 0 });
  };

  return (
    <div className={styles.container}>  
      <h1 className={styles.title}>  
        {categoria ? `Categoría: ${categoria.toUpperCase()}` : "Catalogo Completo"}
      </h1>

      {productosFiltrados.length === 0 ? (
        <p style={{textAlign: 'center'}}>No hay productos aquí :(</p>
      ) : (
        <div className={styles.grid}>
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className={styles.cardProducto}> 
              <img 
                src={producto.thumbnailUrl || "https://via.placeholder.com/300x200?text=Sin+Imagen"} 
                alt={producto.nombre}
                className={styles.cardImagen} 
              />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <strong className={styles.cardPrecio}>${formatPrecio(producto.precio)}</strong>
              <button 
                className={styles.cardBtn}
                onClick={() => alert(`Agregaste ${producto.nombre}`)}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;