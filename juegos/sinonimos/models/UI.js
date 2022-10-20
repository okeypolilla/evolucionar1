export class UI{

    constructor() {}


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

        mostrarPuntaje(puntaje) {
		/*
        const quizFinalHTML = `
        <h1>Resultado</h1>
        <h2 id="puntaje">Tu Puntaje: ${puntaje}</h2>
        <input type="button" class="button" id="salir" value="REINTENTAR" onclick="window.location.reload()"/>
        <input type="button" class="button" id="salir" value="SALIR" onclick="location.href='../../index.html'"/>
        `
        const element = document.getElementById('Quiz');
        element.innerHTML = quizFinalHTML;
        */
			if(puntaje > 4){
				_SWin(); window.location.reload();
			}else{ _SLose();}
			
	
        }

        mostrarProgreso(preguntanNro, total){
        const element = document.getElementById('Progreso')
        element.innerHTML = `
        Pregunta ${preguntanNro} de ${total}
        `;
        }

}