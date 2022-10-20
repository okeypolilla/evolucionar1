let game;
let ops=[4];
let aux;
const ar=[];

function preset(){
    game = Math.floor(Math.random()*8)+1;
    document.getElementById("phS").src = 'styles/img/S'+ game +'.png';

    //La respuesta se encuentra en el ops[0]

        ops[0] = 'styles/img/P'+ game +'.png'; 
        ar.push(game);
        aux=randomize2();
        ops[1] = 'styles/img/P'+ aux +'.png';
        aux=randomize2();
        ops[2] = 'styles/img/P'+ aux +'.png';
        aux=randomize2();
        ops[3] = 'styles/img/P'+ aux +'.png';
}

function randomize2(){
    let rand;
    if(ar.length>=4) return 0;
    do{
       rand = Math.floor(Math.random()*8)+1;
    }while(isOnArray2(rand));  
    ar.push(rand);        
    return rand;
}

const isOnArray2 = x => {
    return ar.includes(x);
}