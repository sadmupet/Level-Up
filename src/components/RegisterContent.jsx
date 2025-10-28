// import '../css/registroStyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../css/RegistroComponents.module.css'

export default function RegisterContent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

    
    const manejoSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !password || !confirmPassword || !edad){
            setError('¡Rellena todos los campos!');
            setExito('');
            return;
        }

        if (confirmPassword !== password) {
            setError('Las contraseñas no coinsiden.');
            setExito('');
            return;
        }
        if (edad < 18) {
            setError('Debes ser mayor de edad para registrarte. ¡Vete a jugar al roblox coño!.');
            setExito('');
            return;
        } else if (edad > 777) {
            setError('Edad no valida. Nadie vive mas que vegetta777.');
            setExito('');
            return;
        }
        
        
        const newUser = {
            email: email,
            password: password,
            edad: edad,
        };

        const usuarioExistenteJSON = localStorage.getItem('user');

        let validacion = usuarioExistenteJSON ? JSON.parse(usuarioExistenteJSON) : null;

        if (validacion && validacion.email === email) {
            setError('Ese correo ya existe.');
            setExito('');
            return;
        }
        
        localStorage.setItem('user', JSON.stringify(newUser));
        
        let usuarioExistente = JSON.parse(localStorage.getItem('user'));
        
        
        

        console.log(newUser);
        
        // desde este punto todo fue un fokin exito
        
        
        if (usuarioExistente.email.endsWith('@duocuc.cl')){
            setExito('Registro exitoso como estudiante DUOC UC. ¡Obtiene descuentos exclusivos!')
            setError('');
        } else {
            setError('');
            setExito('¡Registro exitoso!')
        }

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setEdad('');
    
    }

  return (

    <div className={style.cajitaRegistro}>

        <h1>Registro</h1>

        <form onSubmit={manejoSubmit}>

            <div className={style.inputGroupe}>

                <label htmlFor="correo">Ingrese su correo:</label>
                <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div>

            <div className={style.inputGroupe}>

                <label htmlFor="contraseña">Cree la contraseña:</label>
                <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>

            <div className={style.inputGroupe}>

                <label htmlFor="contraseña_confirm">Confirme su contraseña:</label>

                <input type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />

            </div>

            <div className={style.inputGroupe}>

                <label htmlFor="edad">Ingrese su edad:</label>
                <input 
                    type="number" 
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />

            </div>

            <button type="submit" className={style.enterBtn}>Registrarse</button>
            {exito && <p className= {style.exitoMsg}>{exito}</p>}
            {error && <p className= {style.errorMsg} >{error}</p>}

        </form>

        <div className={style.loginLink}>

            <p className={style.Parraf}>¿En realidad si tenias cuenta?</p>
            <Link to="/login" className={style.Link}>Login</Link>

        </div>

    </div>

  )
}
