let VarDia = [
    '25',
    '31',
    '9',
    '11',
    '2',
    '1',
    '10',
    '1'
]

let VarMes= [
    'Diciembre',
    'Octubre',
    'Julio',
    'Septiembre',
    'Abril',
    'Enero',
    'Noviembre',
    'Mayo'
]

let VarFest = [
    'Navidad',
    'Halloween',
    'Independencia',
    'Torres',
    'Malvinas',
    'AnoNuevo',
    'Tradicion',
    'Trabajador'
]

let image = [
    'styles/img/xroja.png',
    'styles/img/tildeverde.jpg'
]


let VD = VarDia; let VM = VarMes; let VF = VarFest;



const Sonicshuffle = (array,) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];

    }
}

Sonicshuffle(VarDia); Sonicshuffle(VarFest); Sonicshuffle(VarMes);

const dFrag = document.createDocumentFragment();

for (let x in VarDia) {
        const div = document.createElement("div");
        div.id = VarDia[x];
        div.className = "list-group-item";
        div.innerText = VarDia[x];
        dFrag.appendChild(div);
}
document.getElementById("example2left").appendChild(dFrag);

for (let x in VarDia) {
    const div = document.createElement("div");
    div.id = VarMes[x];
    div.className = "list-group-item";
    div.innerText = VarMes[x];
    dFrag.appendChild(div);
}
document.getElementById("example2med").appendChild(dFrag);

for (let x in VarDia) {
    const div = document.createElement("div");
    div.id = VarFest[x];
    div.className = "list-group-item";
    div.innerText = VarFest[x];
    dFrag.appendChild(div);
}
document.getElementById("example2right").appendChild(dFrag);

let ale = [0,1,2,3,4,5,6,7];
for (let x in VarDia) {
    const img = document.createElement("img");
    img.id = ale[x];
    img.height = 50; img.width = 50;
    img.src = image[0];
    dFrag.appendChild(img);
}   
document.getElementById("example3").appendChild(dFrag);

let Dorder = VarDia; 
let Morder = VarMes;
let Forder = VarFest;

console.log(Dorder);
console.log(Morder);
console.log(Forder);

new Sortable(example2left, {
    dataIdAttr: "id",
    animation: 150,
    store: {
        set: function (sortable) {
            Dorder = sortable.toArray();
           
             
        },
      },
});

new Sortable(example2right, {
    dataIdAttr: "id",
    animation: 150,
    store: {
        set: function (sortable) {
            Forder = sortable.toArray();
          
             
        },
      },
});

new Sortable(example2med, {
    dataIdAttr: "id",
    animation: 150,
    store: {
        set: function (sortable) {
            Morder = sortable.toArray();
         
             
        },
      },
});

let cont = [false, false, false, false, false, false, false, false];
let el;

function comprobar () {
    

    for (let i=0; i<8; i++) {
        el = document.getElementById(i);
        el.src = image[0];
    }
    
    for (let i = 0; i < 8; i++) {
		console.log(i);
        if ( Dorder [i] == '25') {

            if ( Morder[i] == 'Diciembre') {
                if ( Forder[i] == 'Navidad') {
                    cont[0] = true;
                    const el1 = document.getElementById(i);
                    el1.src = image[1];
					console.log('entre');
                    
                }
            }
        } 


        if ( Dorder [i] == '31') {
            if ( Morder[i] == 'Octubre') {
                if ( Forder[i] == 'Halloween') {
                    cont[1] = true;
                    const el2 = document.getElementById(i);
                    el2.src = image[1];
					console.log('entre');
                }
            }
        } 


        if ( Dorder [i] == '9') {
            if ( Morder[i] == 'Julio') {
                if ( Forder[i] == 'Independencia') {
                    cont[2] = true;
                    const el3 = document.getElementById(i);
                    el3.src = image[1];
					console.log('entre');
                }
            }
        } 


        if ( Dorder [i] == '11') {
            if ( Morder[i] == 'Septiembre') {
                if ( Forder[i] == 'Torres') {
                    cont[3] = true;
                    const el3 = document.getElementById(i);
                    el3.src = image[1];
					console.log('entre');
                }
            }
        } 

        if ( Dorder [i] == '2') {
            if ( Morder[i] == 'Abril') {
                if ( Forder[i] == 'Malvinas') {
                    cont[4] = true;
                    const el4 = document.getElementById(i);
                    el4.src = image[1];
					console.log('entre');
                }
            }
        } 


        if ( Dorder [i] == '1') {
            if ( Morder[i] == 'Enero') {
                if ( Forder[i] == 'AnoNuevo') {
                    cont[5] = true;
                    const el5 = document.getElementById(i);
                    el5.src = image[1];
					console.log('entre');
                }
            }
        } 

        if ( Dorder [i] == '10') {
            if ( Morder[i] == 'Noviembre') {
                if ( Forder[i] == 'Tradicion') {
                    cont[6] = true;
                    const el6 = document.getElementById(i);
                    el6.src = image[1];
					console.log('entre');
                }
            }
        } 

        if ( Dorder [i] == '1') {
            if ( Morder[i] == 'Mayo') {
                if ( Forder[i] == 'Trabajador') {
                    cont[7] = true;
                    const el7 = document.getElementById(i);
                    el7.src = image[1];
					console.log('entre');
                }
            }
        } 

    }

    
    if(cont[0] == true && cont[1] == true && cont[2] == true && cont[3] == true && cont[4] == true && cont[5] == true && cont[6] == true && cont[7] == true) {
		 for (let i = 0; i < 8; i++) {
		 	const el8 = document.getElementById(i);
            el8.src = image[1];
		 }
		
        _SWin();
    }/*else{
		//sAlert2("iOh no!","Algunas fechas no son correctas, iNo te rindas!","");
	}*/
	
}
