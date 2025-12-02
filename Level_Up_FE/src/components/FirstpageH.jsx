import logo from '../images/logo.png'
import carrito from '../images/carrito.svg'
import '../css/firstpage.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function FirstpageH() {

    const { isLoggedIn, logout } = useAuth();


    return (
        <div className="header-space">

            <div className="container">
                
                <div className="logo-titulo">
                    <img src= {logo} alt="logo level up" className="logo"/>
                    <h1>Level-Up</h1>
                </div>

                <nav>
                    <ul>
                        {isLoggedIn ?(
                            <>
                                <li>
                                    <a href="#">Productos ▼</a>
                                    <ul>
                                        <li><Link to="/productos">Productos</Link></li>
                                        <li><Link to="/">Sillas</Link></li>
                                        <li><Link to="/">Escritorios</Link></li>
                                    </ul>
                                </li>

                                <div className="cart_icon">
                                    <Link to="/register">
                                        <img src={carrito} alt="Carrito" width="32" height="32"></img>
                                        <span className="cart_count">0</span>
                                    </Link>
                                </div>
                            
                                <li>
                                    <a href="#">Perfil ▼</a>
                                    <ul>
                                        <Link to="/perfil">Mi Perfil</Link>

                                        <button onClick={logout} className="logout-button">
                                            Logout
                                        </button>
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
        </div>

    )
}
