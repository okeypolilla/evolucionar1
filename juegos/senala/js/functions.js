let corrAns;
let arr=[];
const answers=[];

function assignButtons(){
    arr = document.getElementsByTagName("img");

    corrAns=randomize(); 
    arr[corrAns].value = 1;
    arr[corrAns].src = ops[0]; 

    falsAns=randomize();
    arr[falsAns].value = 0;
    arr[falsAns].src = ops[1]; 

    falsAns=randomize();
    arr[falsAns].value = 0;
    arr[falsAns].src = ops[2];

    falsAns=randomize();
    arr[falsAns].value = 0;
    arr[falsAns].src = ops[3]; 
}

function randomize(){
    let rand;
    if(answers.length>=4) return 0;
    do{
       rand = Math.floor(Math.random()*4)+1;
    }while(isOnArray(rand));  
    answers.push(rand);        
    return rand;
}

const isOnArray = x => {
    return answers.includes(x);
}

//------------------------------------------------

function choice(x){
    arr = document.getElementsByTagName("img");
    if (arr[x].value == 1){
		sAlert("¡Felicitaciones!","¡Lo lograste! sigue así.","","")
        answers.length=0; ar.length=0; reset();
        //scoreAdd(); 
        //answers.clear; reset();
    }
    else{
        sAlert("","¡No te rindas! sigue intentándolo.","","El éxito no se da de la noche a la mañana, ¡no te desanimes!");
		//scoreReset();
    }
}