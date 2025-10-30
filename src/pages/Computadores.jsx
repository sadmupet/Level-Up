import React, { useState } from 'react'
import GridProductos from '../components/GridProductos'
import laptop1 from '../images/laptop_1.jpg'
import laptop2 from '../images/laptop_2.jpg'
import laptop3 from '../images/laptop_3.jpg'
import '../css/computadoresPage.css'
import FirstpageH from '../components/FirstpageH'
import FirstpageFooter from '../components/FirstpageFooter'


export default function Computadores() {
  const [contadorCarrito, setContadorCarrito] = useState(0)

  const productos = [
    {
      id: 1,
      nombre: 'Asus ROG Strix G15',
      descripcion: 'Ryzen 7 · RTX 3060 · 16GB RAM · 1TB SSD',
      precio: 1499.99,
      imagen: laptop1
    },
    {
      id: 2,
      nombre: 'MSI Katana 15',
      descripcion: 'Intel i7 · RTX 4070 · 32GB RAM · 1TB SSD',
      precio: 1899.99,
      imagen: laptop2
    },
    {
      id: 3,
      nombre: 'HP Victus 16',
      descripcion: 'Ryzen 5 · RTX 3050 · 16GB RAM · 512GB SSD',
      precio: 1099.99,
      imagen: laptop3
    }
  ]

  const agregarAlCarrito = (nombre) => {
    setContadorCarrito(contadorCarrito + 1)
    alert(`${nombre} fue agregado al carrito 🛒`)
  }

  return (
    <>
        <header>
            <FirstpageH />
        </header>
        <div className="computadores-container">
          <h1>Computadoras Gaming 💻</h1>
          <p>Explora nuestras mejores opciones en laptops gamer.</p>

          <GridProductos productos={productos} onAgregar={agregarAlCarrito} />

          <div className="carrito-resumen">
            <p>🛒 Productos en carrito: <strong>{contadorCarrito}</strong></p>
          </div>
        </div>
        <footer>
            <FirstpageFooter />
        </footer>
    </>
  )
}
