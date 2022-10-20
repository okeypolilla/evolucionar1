let GLOBALDOM;

window.onload = () => {
    buttons = document.getElementsByTagName('button');
    for (const obj of buttons) {
        obj.addEventListener(
            'click',
            ()=>{  main( parseInt(obj.value) ) }
        )
    }

    

    GLOBALDOM = new DOMaker('body');
}

const main = function(LVL){
    GLOBALDOM.clearFocus();
    GLOBALDOM.enqueueElement(
        '<span style="color:white" class="material-symbols-outlined" id="back" > arrow_back </span> <br><label for="back"><b style="color:white">SALIR</b></label>'
    );
    GLOBALDOM.execute();

    //back.onclick(() => { console.log(this)});
    /*Si hay un error funciona*/ 

    GLOBALDOM.makeBox('container');
    GLOBALDOM.changeFocus('container');
    const MathMaker = new MathProblem(LVL);
    GLOBALDOM.execute();


    const RESULT = MathMaker.getProblemResult();
    GLOBALDOM.enqueueElement(
        '<b id="input"  class="div__number"> = '+
        RESULT
        +'</b>'
    )


    GLOBALDOM.enqueueElement('<button class="btn btn_check" id="submit_button" >Probar</button>');
    GLOBALDOM.enqueueElement('<div class="" id="uwin"></div>');
    GLOBALDOM.execute();

    const InputsText = findText(document.getElementsByTagName('input'))
    for (const Input of InputsText) {
        Input.addEventListener(
            'input',
            ()=>{
                if (!stringSolve(Input.value)) {
                    Input.value = '';
                }
            }
        )
    }

    document.getElementById('submit_button').addEventListener(
        'click',
        ()=>{checker(MathMaker)}
    );

    document.getElementById('back').addEventListener(
        'click',
        function(){
            location.reload();
        }
    );
} 

const findText = (DOMArr) => {
    const Array = [];
    for (const DOM of DOMArr) {
        if (DOM.type == 'text') {
            Array.push(DOM)
        }
    }   
    return Array;
}

const stringSolve = (value)  => {
    return value=='' || value=='+' || value=='-';
}