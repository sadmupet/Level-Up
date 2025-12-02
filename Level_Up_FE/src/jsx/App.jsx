// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CarritoProvider } from '../context/CarritoContext'

import FirstPage from '../pages/FirstPage.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'
import Productos from "../pages/Productos.jsx";
import FirstpageH from '../components/FirstpageH.jsx';
import Carrito from "../pages/Carrito.jsx"


function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:categoria" element={<Productos />} />

          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CarritoProvider>
  )
}

export default App
