export class UI{

    constructor() {}

    mostrarPregunta(text){

        const titPregunta = document.getElementById('Pregunta')
        titPregunta.innerText = text;


    }


    mostrarOpciones(opciones, callback) {

        const opcionesCont = document.getElementById('Opciones')

        opcionesCont.innerHTML = " "

        for (let i = 0; i < opciones.length; i++){
            const button = document.createElement('button')
            button.innerText = opciones[i];
            button.className= "button"
            button.addEventListener('click', () => callback(opciones[i])) 

            opcionesCont.append(button);
        } 
        }

        /**
         * 
         * @param {number} puntaje puntaje total
         */
        
        mostrarPuntaje(puntaje) {
		//Tu Puntaje: ${puntaje}
        /*
		const quizFinalHTML = `
        <h1>Resultado</h1>
        <h2 id="puntaje">Tu Puntaje: ${puntaje}</h2>
        <input type="button" class="button" id="salir" value="REINTENTAR" onclick="window.location.reload()"/>
        <input type="button" class="button" id="salir" value="SALIR" onclick="location.href='../../index.html'"/>
        `
		*/
		if(puntaje >=3){
			 sAlert2("Genial!","Lo lograste! Tu Puntaje: " + puntaje,"");
		}else{
			sAlert2("No te Rindas!","Sigue Intentandolo! Tu Puntaje: " + puntaje,"");
		}
        const element = document.getElementById('Quiz');
        element.innerHTML = quizFinalHTML;
        }

        mostrarProgreso(preguntanNro, total){
        const element = document.getElementById('Progreso')
        element.innerHTML = `<label>
        Pregunta ${preguntanNro} de ${total}
        </label>`;
        }

}