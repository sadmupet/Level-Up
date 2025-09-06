
export default class Usuario { 

    constructor(correo, contraseña, edad) {
        this.correo = correo;
        this.contraseña = contraseña;
        this.edad = edad;
    }

    esEstudiante() {
        return this.correo.endsWith("@duocuc.cl");
    }

}