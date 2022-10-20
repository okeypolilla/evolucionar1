/*
	Mejoras:	
		que permita borrar de a uno (el que elija)
		botones de un solo click o ingresados por teclado
		mostrar cual era la secuencia
*/

//Starting
function gameStart(){
    document.getElementById('start').style="display:none";
    document.getElementById('title').innerHTML = "Ronda <br>" +  cookieReader(gamedata,"round")
    const interval = setInterval(timerNumbers, 1000);

    function timerNumbers(){
        numbers.push(randomizer("numbers")) 
        checkArrayFRN(numbers)
        
        if(numbers.length != 1 || numbers.length != 0){
            for(let x in numbers){
                if(numbers[x] == numbers[x-1]){numbers[x] = randomizer("numbers")}
                
            }
         }
         
        //console.log(numbers.length-1)

        if(numbers.length <= parseInt(cookieReader(gamedata,"nCount"))){
            document.getElementById("txt").innerHTML = `<h1 style="color:green;">`+ numbers[numbers.length-1];
        }else{
            clearInterval(interval); numbers.splice(numbers.length-1, numbers.length)
            document.getElementById('txt').innerHTML = 'Seleccione los numeros en orden';
            NPConstruct();
            
        }


    }
   
    return "Game Started!"
    
}


document.getElementById('clean').onclick = function(){
    uNumbers.length = 0;
    document.getElementById('uSelect').innerHTML = ''
    
    const btnList = document.querySelectorAll(".btn");
    for(let x in btnList){
        btnList[x].class = 'btn';
    }
}

function selectCharacter(event){
    let btn = document.getElementById(event.target.id); 


    if(btn.style.backgroundColor == "green"){
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.650)";
        
    }else{
         btn.style.backgroundColor = "green";
         uNumbers.push(parseInt(btn.innerText));  
         document.getElementById('validate').style="";
         document.getElementById('clean').style="";
         document.getElementById('uSelect').innerHTML = uNumbers.join(' - ')
    }




}

document.getElementById('validate').onclick = function(){
    let cAccert = 0
    if(uNumbers.length == numbers.length){
        for(let x in uNumbers){
            if(uNumbers[x] == numbers[x]){
                cAccert+=1;
              //  console.log(cAccert)
            }
        }
        if(cAccert == numbers.length){
            //alert("Ganaste")
            round+=1;
            gamedata = document.cookie = `name=${name};nCount=${ncount++};round=${round};points=${randomizer("points")}` 
            zamasEverything();
            gameStart()
        }else{
           // alert("Perdiste, la secuencia era " + numbers)
            sAlert("","¡No te rindas! sigue intentándolo. La secuencia era " + numbers,"","El éxito no se da de la noche a la mañana, ¡no te desanimes!");
			zamasEverything();  
            round = 1;
            gamedata = document.cookie = `name=${name};nCount=3;round=${round};points=0` 
            gameStart()
            
        }
        
    }else{
       // alert("Perdiste, la secuencia era " + numbers)
        sAlert("","¡No te rindas! sigue intentándolo. La secuencia era " + numbers,"","El éxito no se da de la noche a la mañana, ¡no te desanimes!");
		zamasEverything(); 
        round = 1;
        gamedata = document.cookie = `name=${name};nCount=3;round=${round};points=0`  
        gameStart()
        
    }

    if(cookieReader(gamedata, 'round') == '6'){
        _SWin();
    }
    
}

document.getElementById('info').onclick = function(){
    if(name == ''){name = prompt('¿Cúal es tu nombre?') || "Jugador" }
    
    alert(`¡Hola ${name}! hasta el momento estás así:
        Ronda : ${cookieReader(gamedata,"round")}
        Puntaje : ${cookieReader(gamedata,"points")}
        ---
        Versión del Juego : 1.1
        `)
}
