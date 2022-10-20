
let letras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]  //letras 26 // para for 25
let G=0;
let P=0;
let numero=[];
let vuelta=[];
let palabra= [];
let guarda2= [];

positionR=Math.floor(Math.random() * (15));    //selecciona la letra a repetir 



let correctAnswer = 0;
const ArrayLetters = repetirLetra(getRandomLetters(15));

window.onload = function(){
  document.getElementById("b2").addEventListener(
    "onkeydown",
   ()=>{

   }


  )


  document.getElementById('cont1').innerHTML='<h1 class="body" style="color:white;">'+ArrayLetters.join(" ");
}

function getRandomLetters ( size ) {
  const ArrayLetters = [];
  for ( let i=0 ; i<size ; i++ ) {
    let indexLetter = Math.ceil(Math.random()*25)
    let letter = letras[indexLetter]
    if (!ArrayLetters.includes(letter)) {
      ArrayLetters.push(letter)
    } else {
      i--;
      continue;
    }
  }

  return ArrayLetters;
}



function repetirLetra ( ArrayLetters ) {
    const indexLetter = Math.floor(Math.random()*ArrayLetters.length)

    let indexPos;
    do{
      indexPos = Math.floor(Math.random()*ArrayLetters.length);
    }while(indexLetter==indexPos);

    correctAnswer = ArrayLetters[indexLetter];


    ArrayLetters[indexPos] = ArrayLetters[indexLetter];
    return ArrayLetters;
}

function revisar()
{

    let revisa=document.getElementById("texto").value;
    revisa=revisa.toUpperCase();

    if(correctAnswer==revisa)
    {
      G++
      let elemento1=document.getElementById("b2");
      elemento1.style.display="none";
      let elemento2=document.getElementById("texto");
      elemento2.style.display="none";
      document.getElementById('cont1').innerHTML="<h1>CORRECTO</h1>";
      _SWin();

    }else{
      P++
      let elemento1=document.getElementById("b2");
      elemento1.style.display="none";
      let elemento2=document.getElementById("texto");
      elemento2.style.display="none";
      document.getElementById('cont1').innerHTML="<h1>INCORRECTO</h1>";
      _SLose();
    }


if(G+P<=4)
  {
      let elementox=document.getElementById("este");
      elementox.style.display="block";   
    }else{
        document.getElementById('cont1').innerHTML="<h1>PUNTUACION</h1>" + " "+ G + "/5";
        let elementox=document.getElementById("volver");
        elementox.style.display="block";   
        G=0
        P=0	
    }


}