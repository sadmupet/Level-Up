import React from "react";
import CardProductos from "./cardProductos";
import "../css/computadoresPage.css";

export default function GridProductos({ productos, onAgregar }) {
  return (
    <div className="grid-productos">
      {productos.map((producto) => (
        <CardProductos
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
          onAgregar={() => onAgregar(producto.nombre)}
        />
      ))}
    </div>
  );
}
