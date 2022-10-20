
export class Pregunta{

    constructor(opciones, respuesta){
    this.opciones = opciones;
    this.respuesta = respuesta;
    }

    
    respuestaCorrecta(opcion) {
        return opcion == this.respuesta
    }
}