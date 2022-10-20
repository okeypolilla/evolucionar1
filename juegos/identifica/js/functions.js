let ScrollerCont = 0;
let ac = 0;
let ac2 = 0;

window.onload = function () { 
    const DOM = document.getElementsByTagName('button');
    for (const iterator of DOM) {
        iterator.value = compare(iterator.innerHTML);
        iterator.addEventListener (
            'click',
            () => {
                isTrue(iterator.value, iterator);
                
            }
        ) 
    }
}
 
const compare = (text) => {
    return CORRECTRES.includes(text.toUpperCase());
}

const isTrue = (boolean, DOM) => {
    if (boolean=='true') {  
        DOM.disabled = true;
        AutoScroll(document.getElementById('caja'));
        ac+=1;
    }else{
        sAlert2("iOh no!","Intentalo de nuevo, no te rindas.","");
		ac2 += 1 ;
    }
	
	if (ac==10 && ac2 == 0){
        sAlert("iGanaste!","Respondiste correctamente todas las preguntas","","iBien Hecho!");
    }else if (ac == 10 && ac2 > 0){
        sAlert("iGanaste!", `Pero te equivocaste ${ac2} veces` , "", "iBien Hecho!");
    }
}

const AutoScroll = (DOM) => {
    ScrollerCont+=428;
    DOM.scrollTop = ScrollerCont;
}
    