import { data } from "./data.js";

import { Pregunta } from "../models/Pregunta.js";

export const nuevaPregunta = data.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
