
export class Pregunta{

    /**
     * 
     * @param {string} text Pregunta
     * @param {string[]} opciones Opciones
     * @param {string} respuesta Respuesta
     */

    constructor(text, opciones, respuesta){
    this.text = text;
    this.opciones = opciones;
    this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} opcion opcion seleccionada
     * @returns {boolean} retorna true si la respuesta es correcta
     */
    
    respuestaCorrecta(opcion) {
        return opcion == this.respuesta
    }
}