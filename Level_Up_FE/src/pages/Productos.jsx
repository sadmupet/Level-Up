import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useCarrito } from "../context/CarritoContext"
import FirstpageH from '../components/FirstpageH';
import styles from '../css/Productos.module.css'
import { API_URL } from '../utils/urlConfig.js';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();
  const { agregarAlCarrito, estaEnCarrito, obtenerCantidadTotal } = useCarrito();

  useEffect(() => {
    setCargando(true);
    fetch(`${API_URL}/productos`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setCargando(false);
      });
  }, []);

  const productosFiltrados = categoria
    ? productos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase())
    : productos;

  const formatPrecio = (precio) => {
    if (!precio || isNaN(precio)) return "0";
    return precio.toLocaleString("es-CL", { minimumFractionDigits: 0 });
  };

  const handleAgregarCarrito = (producto) => {
    agregarAlCarrito(producto);
    
    // Feedback visual
    const btn = document.activeElement;
    const textoOriginal = btn.textContent;
    btn.textContent = '✓ Agregado';
    btn.classList.add(styles.btnAgregado);
    
    setTimeout(() => {
      btn.textContent = textoOriginal;
      btn.classList.remove(styles.btnAgregado);
    }, 1500);
  };

  if (cargando) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.cargando}>Cargando productos...</div>
      </div>
    );
  }

  return (
  <>
    <FirstpageH />

    <div style={{ marginTop: "100px" }}>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              {categoria ? `Categoría: ${categoria.toUpperCase()}` : "Catálogo Completo"}
            </h1>
            <Link to="/carrito" className={styles.linkCarrito}>
              <button className={styles.btnCarrito}>
                🛒 Ver Carrito {obtenerCantidadTotal() > 0 && `(${obtenerCantidadTotal()})`}
              </button>
            </Link>
          </div>

          {productosFiltrados.length === 0 ? (
            <p className={styles.sinProductos}>No hay productos aquí :(</p>
          ) : (
            <div className={styles.grid}>
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className={styles.cardProducto}>
                  
                  <img
                    src={
                      producto.thumbnailUrl ||
                      "https://placehold.co/300x200/1a1a1a/00ff66?text=Sin+Imagen"
                    }
                    alt={producto.nombre}
                    className={styles.cardImagen}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/300x200/1a1a1a/00ff66?text=Error";
                    }}
                  />

                  <h3 className={styles.cardTitulo}>{producto.nombre}</h3>
                  <p className={styles.cardDescripcion}>{producto.descripcion}</p>

                  <div className={styles.cardFooter}>
                    <strong className={styles.cardPrecio}>
                      ${formatPrecio(producto.precio)}
                    </strong>

                    {producto.stock !== undefined && (
                      <span
                        className={
                          producto.stock > 0
                            ? styles.stockDisponible
                            : styles.stockAgotado
                        }
                      >
                        {producto.stock > 0
                          ? `Stock: ${producto.stock}`
                          : "Sin stock"}
                      </span>
                    )}
                  </div>

                  <button
                    className={`${styles.cardBtn} ${
                      producto.stock === 0 ? styles.btnDisabled : ""
                    }`}
                    onClick={() => handleAgregarCarrito(producto)}
                    disabled={producto.stock === 0}
                  >
                    {producto.stock === 0
                      ? "Sin stock"
                      : estaEnCarrito(producto.id)
                      ? "+ Agregar más"
                      : "Añadir al carrito"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </>
);
};

export default Productos;