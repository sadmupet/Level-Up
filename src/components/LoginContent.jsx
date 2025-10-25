import { useState } from "react"
import style from "../css/LoginContainer.module.css"
import { Link } from 'react-router-dom'

export default function LoginContent() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejoLogin = (e) => {
    e.preventDefault();

    let userLog = JSON.parse(localStorage.getItem('user'))

    // si pasa el if se envia alerta de exito
    if (userLog && userLog.email === email && userLog.password === password) {
      setError('');
      alert('Exito.');
    } else {
      setError('Contraseña o Email incorrectas.');
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
