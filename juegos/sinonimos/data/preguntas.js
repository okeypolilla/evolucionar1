import { data } from "./data.js";

import { Pregunta } from "../models/Pregunta.js";

export var nuevaPregunta = data.map(pregunta => new Pregunta(pregunta.opciones.sort(function() {return Math.random() - 0.5}), pregunta.respuesta))
nuevaPregunta = nuevaPregunta.sort(function() {return Math.random() - 0.5});

