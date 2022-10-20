const answers=[];

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

function choice(x){
    arr = document.getElementsByTagName("button");
    if (arr[x].value == 1){
         _SWin();
        answers.length=0; start();
        //scoreAdd(); 
        //answers.clear; start();
    }
    else{
 		_SLose(); 
		//scoreReset();
    }
}