//////
let splitSQ = SQ[SQRN()]; 
let splitSQ2 =  SQ[SQRN()];
if(splitSQ2 == splitSQ){ splitSQ2 = SQ[SQRN()]}

splitSQ = splitSQ.split(" "); splitSQ2 = splitSQ2.split(" "); 
shuffleArray(splitSQ); shuffleArray(splitSQ2);


let FSplit = splitSQ.slice(0, splitSQ.length/Math.floor(Math.random() * splitSQ.length)) +  ","  + 
             splitSQ2.slice(0, splitSQ2.length/Math.floor(Math.random() * splitSQ2.length)); 


FSplit = FSplit.split(","); shuffleArray(FSplit); 
//////


const DFrag = document.createDocumentFragment();

//
function YN(){
    let a = Math.round(Math.random() * FSplit.length);
    let b = Math.round(Math.random() * 10); 

    if(b == 5){
        return  FSplit[a];
    }else{
        return false;
    }
}


//SQA
for(let x in splitSQ){
    const div = document.createElement("div");
    div.id = "A_"+x; 
    div.innerHTML = '<h2 style="font-size:3vw" class="btnUP">' + splitSQ[x];
    document.getElementById('sqa').appendChild(div);
     
}
let FCombination = [];
//SQB
for(let x in FSplit){
    const div = document.createElement("div");
    div.id = "B_"+x; 
    let chCond = YN();
    if(chCond){
        div.innerHTML = '<h2 style="font-size:2vw" id="btn'+ x +'" class="btn" onclick="selectCharacter(event)">' + chCond; FCombination.push(chCond);
    }else{
        div.innerHTML = '<h2 style="font-size:2vw" id="btn'+ x +'"  class="btn" onclick="selectCharacter(event)" >' + FSplit[x]; FCombination.push(FSplit[x]);  
    }

    document.getElementById('sqb').appendChild(div);
    
}

//---------------

let arr = []; 
function selectCharacter(event){
    let btn = document.getElementById(event.target.id); 
    
    if(btn.style.backgroundColor == "green"){
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        const index = arr.indexOf(btn.innerHTML); 
        if (index >= 0) {
             arr[index] = undefined;
        }
        //console.log(arr);
    }else{
         btn.style.backgroundColor = "green";
         
    }

    if(btn.style.backgroundColor == "green"){
       arr.push(btn.innerText);  
       console.log(arr);
    }
    

   
  
    
}
let SQA; 
let SQC = FCombination.filter(item => !splitSQ.includes(item))
let SQD; 

let EA = false; let c = 0; let c2 = 0;

document.getElementById('enviar').onclick = function(){
   
    for(let x in arr){
        if(arr[x] == undefined){
            //console.log('undefined' + x);
            c++;
        }else{
            c2++;
        }
    }

    if(c == arr.length) EA = true;

     SQA = splitSQ.filter(item => !arr.includes(item)); //si esta vacio, o tiene un elemento menos perdiste.
     SQD = FCombination.filter(item => !splitSQ.includes(item)) // los que no estan arriba
     

     if(SQA.length == splitSQ.length && arr.length>0 && EA != true && SQC.length == c2){
         sAlert("¡Felicitaciones!","¡Lo lograste! sigue así.","","");
       //  window.location.reload();
     }else{
         sAlert("","¡No te rindas! sigue intentándolo.","","El éxito no se da de la noche a la mañana, ¡no te desanimes!");
         //window.location.reload();
     }
     
     console.log(splitSQ," - ",SQA);
}

