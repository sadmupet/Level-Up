import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../css/RegistroComponents.module.css'
import { API_URL } from '../utils/urlConfig'

export default function RegisterContent() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        edad: '',
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

    
    const manejoSubmit = async (e) => {
        e.preventDefault();
        
        // Validaciones
        if (!formData.email || !formData.password || !formData.confirmPassword || !formData.edad) {
            setError('¡Rellena todos los campos!');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        if (parseInt(formData.edad) < 18) {
             setError('Debes tener al menos 18 años.');
             return;
        }

        setError('');
        setExito('Procesando registro...');

        const usuarioParaBackend = {
            email: formData.email,
            password: formData.password,
            edad: parseInt(formData.edad)
        };

        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioParaBackend)
            });

            if (response.ok) {
                setExito('¡Registro exitoso! Redirigiendo al Login...');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                const errorText = await response.text(); 
                setError('Error: ' + errorText);
                setExito('');
            }

        } catch (err) {
            console.error(err);
            setError('Error de conexión con el servidor.');
            setExito('');
        }
    }

  return (

    <div className={style.cajitaRegistro}>

        <h1>Registro</h1>

        <form onSubmit={manejoSubmit}>

            <div className={style.inputGroupe}>
                <label htmlFor="email">Ingrese su correo:</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    required
                />
            </div>

            <div className={style.inputGroupe}>
                <label htmlFor="password">Cree la contraseña:</label>
                <input 
                    type="password" 
                    name="password"
                    value={formData.password} 
                    onChange={handleChange} 
                    required
                />
            </div>

            <div className={style.inputGroupe}>
                <label htmlFor="confirmPassword">Confirme su contraseña:</label>
                <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange} 
                    required
                />
            </div>

            <div className={style.inputGroupe}>
                <label htmlFor="edad">Ingrese su edad:</label>
                <input 
                    type="number" 
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange} 
                    required
                />
            </div>

            <button type="submit" className={style.enterBtn}>Registrarse</button>
            {exito && <p className={style.exitoMsg}>{exito}</p>}
            {error && <p className={style.errorMsg}>{error}</p>}

        </form>

        <div className={style.loginLink}>
            <p className={style.Parraf}>¿En realidad si tenias cuenta?</p>
            <Link to="/login" className={style.Link}>Login</Link>
        </div>

    </div>

  )
}