// import '../css/registroStyle.css'
import { Link } from 'react-router-dom'
import style from '../css/RegistroComponents.module.css'

export default function RegisterContent() {
  return (

    <section className={style.sectionRegister}>
        <div className={style.cajitaRegistro}>

            <h1>Registro</h1>

            <form id="registerForm">

                <div className={style.inputGroupe}>
                    <label htmlFor="correo">Ingrese su correo:</label>
                    <input type="email" id="correo" name= "correo_registro" required/>
                </div>

                <div className={style.inputGroupe}>
                    <label htmlFor="contraseña">Cree la contraseña:</label>
                    <input type="password" id="contraseña"  name= "contraseña_registro" required minlength="6"/>
                </div>

                <div className={style.inputGroupe}>
                    <label htmlFor="contraseña_confirm">Confirme su contraseña:</label>
                    <input type="password" id="contraseña_confirm" name= "contraseña_confirm" required minlength="6"/>
                </div>

                <div className={style.inputGroupe}>
                    <label htmlFor="edad">Ingrese su edad:</label>
                    <input type="number" id="edad" name="edad_registro" min="0" max="666" required/>
                </div>

                <button type="submit" className={style.enterBtn}>Registrarse</button>

            </form>

            <div className={style.loginLink}>
                <p className={style.Parraf}>¿En realidad si tenias cuenta?</p>
                <Link to="/" className={style.Link}>Login</Link>
                <i className="fa-sharp-duotone fa-light fa-circle-user"></i>
                <i className="fa-brands fa-discord"></i>
            </div>

        </div>
    </section>
  )
}
