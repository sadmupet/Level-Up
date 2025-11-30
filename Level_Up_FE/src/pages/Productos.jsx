import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../css/computadoresPage.css'

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
    <div className="container"> 
      <h1 className="title"> 
        {categoria ? `Categoría: ${categoria.toUpperCase()}` : "Catalogo Completo"}
      </h1>

      {productosFiltrados.length === 0 ? (
        <p style={{textAlign: 'center'}}>No hay productos aquí :(</p>
      ) : (
        <div className="grid">  
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="card-producto">
              <img 
                src={producto.thumbnailUrl || "/no-image.png"} 
                alt={producto.nombre}
                className="card-imagen"
              />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <strong className="card-precio">${formatPrecio(producto.precio)}</strong>
              <button 
                className="card-btn"
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