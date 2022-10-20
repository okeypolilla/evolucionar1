function checker (MathMaker) {
    const ArrNumbers = MathMaker.getNumbers(); 
    const DOMInputs = document.getElementsByTagName('input');
    let ACUM = ArrNumbers[0];
    let IndexNumber = 1;


    for (const input of DOMInputs) {
        if (input.value == '+') {
            ACUM += 1*ArrNumbers[IndexNumber++];
        }else if (input.value == '-') {
            ACUM += -1*ArrNumbers[IndexNumber++];
        }
    }
    

    makeResult(ACUM == MathMaker.getProblemResult());
}

function makeResult (bool) {
    const result = document.getElementById('uwin');
    result.innerHTML = '';

    if (bool) {
        result.className = 'win';
        result.innerHTML = 'Correcto!';
		sAlert("¡Felicitaciones!","¡Lo lograste! sigue así.","",""); 

    }else{
        result.className = 'lose';
        result.innerHTML = 'Incorrecto!';
		sAlert2("iOh no!","Intentalo de nuevo, no te rindas.","");
    }
}