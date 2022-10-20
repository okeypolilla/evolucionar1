
import { nuevaPregunta } from "./data/preguntas.js";
import { Pregunta } from "./models/Pregunta.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

const actualizarPag = (quiz,ui) => {

    if (quiz.Final()) {

        ui.mostrarPuntaje(quiz.puntaje);
        
    }else{

        ui.mostrarOpciones(quiz.getPreguntaNro().opciones, (opcionActual) => {
        quiz.adivinar(opcionActual)
        actualizarPag(quiz,ui)
        });
    }

    ui.mostrarProgreso(quiz.preguntanNro +1, nuevaPregunta.length)
}

function main(){
    const quiz = new Quiz(nuevaPregunta);
    const ui = new UI();

    actualizarPag(quiz,ui)
}

main();