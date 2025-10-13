// import '../css/registroStyle.css'
import { Link } from 'react-router-dom'


export default function RegisterContent() {
  return (
    <section className="cajita-registro">

        <div className="registro-titulo">
            <h1>Registro</h1>
        </div>

        <div className="registro-formulario">

            <form id="registerForm">

                <div className="input-group">
                    <label for="correo">Ingrese su correo.</label>
                    <input type="email" id="correo" name= "correo_registro" required/>
                </div>

                <div className="input-group">
                    <label for="contraseña">Cree la contraseña.</label>
                    <input type="password" id="contraseña"  name= "contraseña_registro" required minlength="6"/>
                </div>

                <div className="input-group">
                    <label for="contraseña_confirm">Confirme su contraseña.</label>
                    <input type="password" id="contraseña_confirm" name= "contraseña_confirm" required minlength="6"/>
                </div>

                <div className="input-group">
                    <label for="edad">Ingrese su edad.</label>
                    <input type="number" id="edad" name="edad_registro" min="0" mas="666" required/>
                </div>

                <button type="submit" className="enter-btn">Registrarse</button>

            </form>

            <div className="login-link">
                <p>¿En realidad si tenias cuenta? <Link to="/">Login</Link></p>
                <i className="fa-sharp-duotone fa-light fa-circle-user"></i>
                <i className="fa-brands fa-discord"></i>
            </div>

        </div>

    </section>
  )
}
