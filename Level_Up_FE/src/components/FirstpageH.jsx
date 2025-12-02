import logo from '../images/logo.png';
import carritoIcon from '../images/carrito.svg';
import '../css/firstpage.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCarrito } from '../context/CarritoContext';

export default function FirstpageH() {

    const { isLoggedIn, logout } = useAuth();
    const { obtenerCantidadTotal } = useCarrito();

    return (
        <header>
            <div className="container">

                <div className="logo-titulo">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="logo level up" className="logo" />
                        <h1>Level-Up</h1>
                    </Link>
                </div>

                <nav>
                    <ul>

                        {isLoggedIn ? (
                            <>
                                
                                <li>
                                    <a href="#">Productos ▼</a>
                                    <ul>
                                        <li><Link to="/productos">Todos</Link></li>
                                        <li><Link to="/productos/sillas">Sillas</Link></li>
                                        <li><Link to="/productos/escritorios">Escritorios</Link></li>
                                    </ul>
                                </li>

                               
                                <div className="cart_icon">
                                    <Link to="/carrito">
                                        <img src={carritoIcon} alt="Carrito" />
                                        <span className="cart_count">
                                            {obtenerCantidadTotal()}
                                        </span>
                                    </Link>
                                </div>

                              
                                <li>
                                    <a href="#">Perfil ▼</a>
                                    <ul>
                                        <li><Link to="/perfil">Mi Perfil</Link></li>

                                        <li>
                                            <button 
                                                onClick={logout} 
                                                className="logout-button"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </li>

                            </>
                        ) : (
                            <>
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
}
