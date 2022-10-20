export class Quiz{

    preguntanNro = 0

    puntaje = 0

    constructor(preguntas) {
        this.preguntas = preguntas
    }

    getPreguntaNro() {
            return this.preguntas[this.preguntanNro]
    }

    Final(){

        return this.preguntas.length == this.preguntanNro
    }
    
    adivinar(respuesta){

        if(this.getPreguntaNro().respuestaCorrecta(respuesta)){

            this.puntaje++
        }
        
        this.preguntanNro++
    }

}