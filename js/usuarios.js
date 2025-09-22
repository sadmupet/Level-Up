
export default class Usuario { 

    constructor(correo, contraseña, edad) {
        this.correo = correo;
        this.contraseña = contraseña;
        this.edad = edad;
    }

    esEstudiante() {
        return this.correo.endsWith("@duocuc.cl");
    }


    // aqui se guardan en el local storage
    user_data_save() {

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        usuarios.push(this);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

    }

    // solo para revisar el local storage proximamente
    static info_users() {
        return JSON.parse(localStorage.getItem('usuarios')) || [];
    }

    //esto es para borrarlos despues
    static remove_all_users() {
        localStorage.removeItem('usuarios');
    }

}