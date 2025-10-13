import logo from '../images/logo.png'
import carrito from '../images/carrito.svg'
import '../css/firstpage.css'

export default function FirstpageH() {
  return (
    <header>

        <div className="container">
              
            <div className="logo-titulo">
                <img src= {logo} alt="logo level up" className="logo"/>
                <h1>Level-Up</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=3cyS6wMVCqI&ab_channel=TG%27ninG%C3%BCnl%C3%BC%C4%9F%C3%BC" target="_blank">Sobre nosotros</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                    <li>
                        <a href="#">Productos ▼</a>
                        <ul>
                            <li><a href="computadores.html">Computadores</a></li>
                            <li><a href="poyitas.html">Owo</a></li>
                            <li><a href="corys.html">Corysscotts</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="cart_icon">
                <a href="products.html">
                    <img src={carrito} alt="Carrito" width="32" height="32"></img>
                    <span className="cart_count">0</span>
                </a>
            </div>

            <nav>
                <ul>
                    <li><a href="index.html">Log In</a></li>
                    <li><a href="register.html">Register</a></li>
                </ul>
            </nav>
        </div>
    </header>

  )
}
