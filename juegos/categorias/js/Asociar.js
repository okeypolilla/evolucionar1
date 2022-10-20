let categoria = [
    'Cocina',
    'Comedor',
    'Garaje'

];

let objetos = [
    'C_Tenedor',
    'G_Auto',
    'C_Licuadora',
    'CO_Sofa',
    'CO_Alfombra',
    'C_Bacha',
    'G_Escritorio',
    'G_Palanca'


];

let objCount = [0,0,0];

for(let x in objetos){

if(objetos[x].substring(0,2) == 'C_'){
    objCount[0]++;
}
if(objetos[x].substring(0,3) == 'CO_'){
    objCount[1]++;
}
if(objetos[x].substring(0,2) == 'G_'){
    objCount[2]++;
}

}




let _c1 = 0 ; let _c2 = 0; let _c3 = 0;

window.onload = function(){

    const dFrag = document.createDocumentFragment();
    for(let x in categoria){
        const h2 = document.createElement("h2");
        h2.id = categoria[x];
        h2.innerText = categoria[x];
        document.getElementById("box_btn").appendChild(h2);
    }
    
    for (let x in categoria) {
            const div = document.createElement("div");
            div.id = "A_"+categoria[x];
            div.style = 'margin: 5px;';
            div.className = 'box';
           // div.innerHTML = '<h2>' + categoria[x];
           document.getElementById(categoria[x]).appendChild(div);
    }
    



    
   
    const opc = document.createElement("div");
    opc.id = "opc";
    opc.className = 'box2';
    opc.innerHTML = '';


    document.getElementById("box_btn").appendChild(opc);


    for(let x in objetos){
        const h3 = document.createElement("h3");
        if(objetos[x].substring(0,2) == 'C_'){
            h3.id = objetos[x].substring(0,2);
            objetos[x] = objetos[x].substring(2,objetos[x].length);
        }
        if(objetos[x].substring(0,3) == 'CO_'){
            h3.id = objetos[x].substring(0,3);
            objetos[x] = objetos[x].substring(3,objetos[x].length);
        }
        if(objetos[x].substring(0,2) == 'G_'){
            h3.id = objetos[x].substring(0,2);
            objetos[x] = objetos[x].substring(2,objetos[x].length);
        }
        
        h3.innerText = objetos[x];
        h3.style = "margin:5px;"
      //  h3.className = "box2";
        document.getElementById("opc").appendChild(h3);
    }

    
    
    Sortable.create(document.getElementById('opc'), {
        dataIdAttr: "id",
        animation: 150,
        forceFallback: true,
        group: "elementos",
    
        store: {
          set: function (sortable) {
               console.log(sortable.toArray());
               
          },
        },
      });

      let c1 = []; let c2 = []; let c3 = []; 


      Sortable.create(document.getElementById('A_'+categoria[0]), {
        dataIdAttr: "id",
        animation: 150,
        forceFallback: true,
        group: "elementos",
    
        store: {
          set: function (sortable) {
               c1 = sortable.toArray();
               console.log(c1);
          },
        },
      });


      Sortable.create(document.getElementById('A_'+categoria[1]), {
        dataIdAttr: "id",
        animation: 150,
        forceFallback: true,
        group: "elementos",
    
        store: {
          set: function (sortable) {
                c2 = sortable.toArray();
                console.log(c2);
          },
        },
      });

      Sortable.create(document.getElementById('A_'+categoria[2]), {
        dataIdAttr: "id",
        animation: 150,
        forceFallback: true,
        group: "elementos",
    
        store: {
          set: function (sortable) {
                c3 = sortable.toArray();
                console.log(c3);
          },
        },
      });

      //
      
      document.getElementById('enviar').onclick = function (){
            
            for(let x in c1){
                if(c1[x] == 'C_'){
                    _c1 = _c1+1;
                }
            }

            for(let x in c2){
                if(c2[x] == 'CO_'){
                    _c2 = _c2+1;
                }
            }
        
            for(let x in c3){
                if(c3[x] == 'G_'){
                    _c3 = _c3+1;
                }
            }


            if(_c1 == objCount[0]){
                 if(_c2 == objCount[1]){  
                      if(_c3 == objCount[2]){
                           alert("Win!!!!"); window.location.reload();  
                        }
                        else{
                            alert("Perdiste"); window.location.reload();                    
                        } 
                }
                else{
                    alert("Perdiste"); window.location.reload();                    
                }
            
            }
            else{
                alert("Perdiste"); window.location.reload();                    
            }
      }
}
