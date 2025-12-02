import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/Carrito.module.css';

const Carrito = () => {
  const { 
    carrito, 
    eliminarDelCarrito, 
    actualizarCantidad, 
    vaciarCarrito, 
    obtenerTotal,
    obtenerCantidadTotal 
  } = useCarrito();
  
  const navigate = useNavigate();

  const formatPrecio = (precio) => {
    if (!precio || isNaN(precio)) return "0";
    return precio.toLocaleString("es-CL", { minimumFractionDigits: 0 });
  };

  const handleFinalizarCompra = () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    
    const confirmacion = window.confirm(
      `¿Confirmar compra por $${formatPrecio(obtenerTotal())}?`
    );
    
    if (confirmacion) {
      alert(`¡Compra realizada con éxito!\n\nTotal: $${formatPrecio(obtenerTotal())}\nProductos: ${obtenerCantidadTotal()}`);
      vaciarCarrito();
      navigate('/productos');
    }
  };

  const handleVaciarCarrito = () => {
    const confirmacion = window.confirm('¿Estás seguro de vaciar el carrito?');
    if (confirmacion) {
      vaciarCarrito();
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Mi Carrito de Compras</h1>
          <Link to="/productos" className={styles.linkVolver}>
            ← Volver a productos
          </Link>
        </div>

        {carrito.length === 0 ? (
          <div className={styles.carritoVacio}>
            <div className={styles.iconoVacio}>🛒</div>
            <h2>Tu carrito está vacío</h2>
            <p>Agrega productos para comenzar tu compra</p>
            <Link to="/productos">
              <button className={styles.btnSeguirComprando}>
                Ver productos
              </button>
            </Link>
          </div>
        ) : (
          <div className={styles.contenidoCarrito}>
            <div className={styles.listaProductos}>
              <div className={styles.cantidadItems}>
                {obtenerCantidadTotal()} {obtenerCantidadTotal() === 1 ? 'producto' : 'productos'} en el carrito
              </div>

              {carrito.map((item) => (
                <div key={item.id} className={styles.itemCarrito}>
                  <img 
                    src={item.thumbnailUrl || "https://placehold.co/100x100/1a1a1a/00ff66?text=Sin+Imagen"} 
                    alt={item.nombre}
                    className={styles.imagenProducto}
                    onError={(e) => {
                      e.target.src = "https://placehold.co/100x100/1a1a1a/00ff66?text=Error";
                    }}
                  />
                  
                  <div className={styles.infoProducto}>
                    <h3>{item.nombre}</h3>
                    <p className={styles.descripcion}>{item.descripcion}</p>
                    <p className={styles.precioUnitario}>
                      Precio unitario: ${formatPrecio(item.precio)}
                    </p>
                  </div>

                  <div className={styles.controlesCantidad}>
                    <button 
                      onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                      className={styles.btnCantidad}
                      title="Disminuir cantidad"
                    >
                      −
                    </button>
                    <input 
                      type="number"
                      value={item.cantidad}
                      onChange={(e) => {
                        const valor = parseInt(e.target.value);
                        if (valor > 0) {
                          actualizarCantidad(item.id, valor);
                        }
                      }}
                      className={styles.inputCantidad}
                      min="1"
                    />
                    <button 
                      onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                      className={styles.btnCantidad}
                      title="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>

                  <div className={styles.subtotal}>
                    <p className={styles.labelSubtotal}>Subtotal:</p>
                    <p className={styles.montoSubtotal}>
                      ${formatPrecio(item.precio * item.cantidad)}
                    </p>
                  </div>

                  <button 
                    onClick={() => eliminarDelCarrito(item.id)}
                    className={styles.btnEliminar}
                    title="Eliminar producto"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.resumen}>
              <h2 className={styles.tituloResumen}>Resumen de compra</h2>
              
              <div className={styles.detallesResumen}>
                <div className={styles.lineaResumen}>
                  <span>Productos ({obtenerCantidadTotal()}):</span>
                  <span>${formatPrecio(obtenerTotal())}</span>
                </div>
                <div className={styles.lineaResumen}>
                  <span>Envío:</span>
                  <span className={styles.envioGratis}>GRATIS</span>
                </div>
                <div className={styles.separador}></div>
                <div className={styles.totalFinal}>
                  <span>Total:</span>
                  <span className={styles.montoTotal}>
                    ${formatPrecio(obtenerTotal())}
                  </span>
                </div>
              </div>

              <button 
                className={styles.btnFinalizar}
                onClick={handleFinalizarCompra}
              >
                Finalizar compra
              </button>

              <div className={styles.botonesSecundarios}>
                <button 
                  className={styles.btnVaciar}
                  onClick={handleVaciarCarrito}
                >
                  Vaciar carrito
                </button>
                <Link to="/productos">
                  <button className={styles.btnSeguirComprando}>
                    Seguir comprando
                  </button>
                </Link>
              </div>

              <div className={styles.infoSeguridad}>
                Compra 100% segura
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;