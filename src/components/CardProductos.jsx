import React from "react";
import "../css/computadoresPage.css";

export default function CardProductos({ nombre, descripcion, precio, imagen, onAgregar }) {
  return (
    <div className="card-producto">
      <img src={imagen} alt={nombre} className="card-imagen" />
      <h3 className="card-titulo">{nombre}</h3>
      <p className="card-descripcion">{descripcion}</p>
      <p className="card-precio">${precio.toFixed(2)}</p>
      <button className="btn-agregar" onClick={onAgregar}>
        Agregar al carrito 🛒
      </button>
    </div>
  );
}
