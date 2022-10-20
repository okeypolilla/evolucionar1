const DOMaker = function(scope){
    let Focus = document.getElementById(scope);
    let elementCont = 0;
    const ElementQueue = [];

    this.enqueueElement = function( DOM ){
        ElementQueue.push(DOM);
        elementCont++;
    }

    this.execute = () => {
        /*Perdon create node*/
        elementCont = 0;
        ElementQueue.forEach(ELEMENT => {
            Focus.innerHTML += ELEMENT
        });
        ElementQueue.length = elementCont;
    }

    this.clearQueue = () => {
        elementCont = 0;
    }

    this.clearFocus = () => {
        Focus.innerHTML = '';
    }

    this.changeFocus = (id) => {
        Focus = document.getElementById(id);
        //console.log(Focus)
    }

    this.makeBox = (id) => {
        Focus.innerHTML += '<div id='+id+'></div>';
        Focus = document.getElementById(id);
    }
    
}

