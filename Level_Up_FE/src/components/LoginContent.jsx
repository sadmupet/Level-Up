import { useState } from "react"
import style from "../css/LoginContainer.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { API_URL } from "../utils/urlConfig"

export default function LoginContent() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const manejoLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: email,    // Enviamos email
                password: password // Enviamos password
            })
        });

        if (response.ok) {
            // El backend devuelve: { id, email, rol, edad } (el rol se asigna solo como cliente)
            const userData = await response.json();
            
            // AQUI SE GUARDA EN AuthContext
            login(userData);
            
            navigate('/'); 

        } else {
            setError('Correo o contraseña incorrectos.');
        }

    } catch (err) {
        console.error(err);
        setError('Error: No se pudo conectar con el servidor.');
    }
  }


  return (

    <div className={style.loginContainerUwU}>
      <h1>Login</h1>
      <form onSubmit={manejoLogin}>
        <div className={style.divLoginGroup}>
          <label>Correo:</label>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.divLoginGroup}>
          <label>Contraseña:</label>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
        </div>

        <button type="submit" className={style.btnLog}>Lock In</button>
        {error && <p className={style.errorMsg}>{error}</p>}
      </form>

      <div className={style.registerLink}>

              <p className={style.Parraf}>¿No tienes cuenta?</p>
              <Link to="/register" className={style.Link}>Registrarme</Link>

      </div>

    </div>
      
  )
}
