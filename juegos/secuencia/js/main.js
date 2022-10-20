var filerefjs = document.createElement("script");
filerefjs.setAttribute("type", "text/javascript");
filerefjs.setAttribute("src", "frameworks/Sortable.js");
//----------------------


let opciones = [ //orden correcto
    'styles/img/gameIcons/TREN_Ticket.png styles/img/gameIcons/TREN_Subirse.png styles/img/gameIcons/TREN_Trayecto.png styles/img/gameIcons/TREN_Bajar.png',
    'styles/img/gameIcons/BREAD_1.png styles/img/gameIcons/BREAD_2.png styles/img/gameIcons/BREAD_3.png styles/img/gameIcons/BREAD_4.png',
    'styles/img/gameIcons/ICC_1.png styles/img/gameIcons/ICC_2.png styles/img/gameIcons/ICC_3.png styles/img/gameIcons/ICC_4.png styles/img/gameIcons/ICC_5.png styles/img/gameIcons/ICC_6.png',
    'styles/img/gameIcons/SEED_1.png styles/img/gameIcons/SEED_2.png styles/img/gameIcons/SEED_3.png styles/img/gameIcons/SEED_4.png styles/img/gameIcons/SEED_5.png'    
];

let opcionesTXT= [
    "Ticket Subirse Trayecto Bajar", //orden correcto
    "| || ||| ||||",
    "| || ||| |||| ||||| |||||||",
    "| || ||| |||| |||||"
   
];

//-----------------------------------------------------------------
let count = 0;
let phID = Math.floor(Math.random() * opcionesTXT.length);

let opcionesS = opcionesTXT[phID]; opcionesS = opcionesS.split(" "); 
let opcionesI = opciones[phID]; opcionesI = opcionesI.split(" "); 

//-----------------------------------------------------------------
let originalOrder = opcionesTXT[phID]; originalOrder = originalOrder.split(" ");
let SI = false;  

if(opcionesS[0] == "|"){
    SI = true;
}

 const shuffleArray = (array, array2) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        const temp2 = array2[i];
        array2[i] = array2[j];
        array2[j] = temp2;
    }
};
 
shuffleArray(opcionesS, opcionesI);

window.onload = function(){

    const dFrag = document.createDocumentFragment();
    for (let x in opcionesI) {
            const div = document.createElement("div");
            div.id = opcionesS[x];
            div.className = "insideRecOP";
            dFrag.appendChild(div);
    }

    document.getElementById("rec").appendChild(dFrag);
    
    for(let x in opcionesI){
        const img = document.createElement("img");
        img.className = "recOption";
        img.src = opcionesI[x];
        document.getElementById(opcionesS[x]).appendChild(img);
    }

    if(SI == false){
    for(let x in opcionesI){
        const div = document.createElement("div");
        div.id = "text"+x;
        div.innerHTML = '<center><h4>' + opcionesS[x];
        document.getElementById(opcionesS[x]).appendChild(div);

    }
}

//-----------------------------------------------------------------

    for (let x in opcionesI) {
        const div = document.createElement("div");
        div.id = "x"+x;
        div.className = "insideRecOP2";
        dFrag.appendChild(div);
    }

    document.getElementById("rec2").appendChild(dFrag);

    for(let x in opcionesI){
        const img = document.createElement("img");
        img.className = "recOption";
        img.src = 'styles/img/arrow.png';
        document.getElementById("x"+x).appendChild(img);
    }

    
    for(let x in opcionesI){
        
        const div = document.createElement("div");
        div.innerHTML = '<center><h3>' + ++count; 
        document.getElementById("x"+x).appendChild(div);

    }
     
//-----------------------------------------------------------------
    let Uorder = opcionesS; 
    let el = document.getElementById("rec");
    Sortable.create(el, {
        dataIdAttr: "id",
        animation: 150,
        forceFallback: true,
       
    
        store: {
          set: function (sortable) {
               Uorder = sortable.toArray();
                console.log(Uorder);
                console.log(originalOrder);
          },
        },
      });
      document.getElementById('button').onclick = function(){
          tryCombination();
      }
//-----------------------------------------------------------------

    function tryCombination(){
        let CC = 0; 
        for(let i = 0; i < document.querySelectorAll("#rec .insideRecOP").length; ++i){
           if(Uorder[i] == originalOrder[i]){
                ++CC;
           }
        }
    
      
       
        if(CC == originalOrder.length){
            sAlert("¡Felicitaciones!","¡Lo lograste! sigue así.","",""); 
        }else{
            sAlert("","¡No te rindas! sigue intentándolo.","","El éxito no se da de la noche a la mañana, ¡no te desanimes!");
        }

     
    }


}