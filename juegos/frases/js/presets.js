let game;
let ops=[4];
let corrAns;

function preset(){

    game = Math.floor(Math.random()*10)+1;
    if(game==1) document.getElementById("phrase").innerHTML = '<label><i>"Objeto para guardar billetes y tarjetas"</i></label>';
    else if(game==2) document.getElementById("phrase").innerHTML = '<label><i>"Sirve para enfriar alimentos"</i></label>';
    else if(game==3) document.getElementById("phrase").innerHTML = '<label><i>"Objeto hecho para dar la hora"</i></label>';
    else if(game==4) document.getElementById("phrase").innerHTML = '<label><i>"Sirve para beber agua"</i></label>';
    else if(game==5) document.getElementById("phrase").innerHTML = '<label><i>"Sirve para protegerse de la lluvia"</i></label>';
    else if(game==6) document.getElementById("phrase").innerHTML = '<label><i>"Objeto donde se pueden ver las fechas del a&ntilde;o"</i></label>';
    else if(game==7) document.getElementById("phrase").innerHTML = '<label><i>"Profesional encargado de la salud"</i></label>';
    else if(game==8) document.getElementById("phrase").innerHTML = '<label><i>"Sirve para guardar tu equipaje al viajar"</i></label>';
    else if(game==9) document.getElementById("phrase").innerHTML = '<label><i>"Nos permite ingresar letras a un dispositivo"</i></label>';
    else if(game==10) document.getElementById("phrase").innerHTML = '<label><i>"Objeto donde se ven los dibujos animados"</i></label>';

    //La respuesta se encuentra en el ops[0]
        if(game==1){
            ops[0] = "Billetera";
            ops[1] = "Bolsillo";
            ops[2] = "Auto";
            ops[3] = "Llavero";
        }else if(game==2){
            ops[0] = "Heladera";
            ops[1] = "Horno";
            ops[2] = "Microondas";
            ops[3] = "Helado";            
        }else if(game==3){
            ops[0] = "Reloj";
            ops[1] = "Television";
            ops[2] = "Computadora";
            ops[3] = "Movil";            
        }else if(game==4){
            ops[0] = "Vaso";
            ops[1] = "Plato";
            ops[2] = "Sarten";
            ops[3] = "Cuchara";            
        }else if(game==5){
            ops[0] = "Paraguas";
            ops[1] = "Chupetin";
            ops[2] = "Secarropas";
            ops[3] = "Ventilador";            
        }else if(game==6){
            ops[0] = "Calendario";
            ops[1] = "Reloj";
            ops[2] = "Carpeta";
            ops[3] = "Album";            
        }else if(game==7){
            ops[0] = "Doctor";
            ops[1] = "Abogado";
            ops[2] = "Secretario";
            ops[3] = "Profesor";            
        }else if(game==8){
            ops[0] = "Valija";
            ops[1] = "Billetera";
            ops[2] = "Corbata";
            ops[3] = "Auto";            
        }else if(game==9){
            ops[0] = "Teclado";
            ops[1] = "Microfono";
            ops[2] = "Pantalla";
            ops[3] = "Mouse";            
        }else if(game==10){
            ops[0] = "Television";
            ops[1] = "Microondas";
            ops[2] = "Tazon";
            ops[3] = "Radio";            
        }
}

function assignButtons(){
    arr = document.getElementsByTagName("button");

    corrAns=randomize(); 
    arr[corrAns].value = 1;
    arr[corrAns].innerHTML = ops[0]; 

    falsAns=randomize();
    arr[falsAns].value = 0;
    arr[falsAns].innerHTML = ops[1]; 

    falsAns=randomize();
    arr[falsAns].value = 0;
    arr[falsAns].innerHTML = ops[2];

    falsAns=randomize();
    arr[falsAns].value = 0;
    arr[falsAns].innerHTML = ops[3]; 
}