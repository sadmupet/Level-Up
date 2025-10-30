import logo from '../images/logo.png'
import carrito from '../images/carrito.svg'
import '../css/firstpage.css'
import { Link } from 'react-router-dom'

export default function FirstpageH() {
  return (
    <div className="header-space">

        <div className="container">
              
            <div className="logo-titulo">
                <img src= {logo} alt="logo level up" className="logo"/>
                <h1>Level-Up</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to="/register">Sobre nosotros</Link></li>
                    <li><Link to="/register">login</Link></li>
                    <li>
                        <a href="#">Productos ▼</a>
                        <ul>
                            <li><Link to="/computadores">Computadoras</Link></li>
                            <li><Link to="/register">Sillas</Link></li>
                            <li><Link to="/register">Escritorios</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="cart_icon">
                <Link to="/register">
                    <img src={carrito} alt="Carrito" width="32" height="32"></img>
                    <span className="cart_count">0</span>
                </Link>
            </div>

            <nav>
                <ul>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    </div>

  )
}
