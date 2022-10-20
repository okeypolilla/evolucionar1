const MathProblem = function(Level) {
    const LVL = Level;
    const RandomObj = new Random(LVL*10);

    const TotalSign = LVL+1;
    var ArraySign = [RandomObj.getRandomBool(), RandomObj.getRandomBool(),
        RandomObj.getRandomBool(),  RandomObj.getRandomBool(),  RandomObj.getRandomBool(),  
        RandomObj.getRandomBool(),  RandomObj.getRandomBool(),  RandomObj.getRandomBool(),  
        RandomObj.getRandomBool(),  RandomObj.getRandomBool()];

    const TotalNum = LVL+2;
    const Numbers = [];
    
    let Result;




    

    function GenerateNumbers () {
        Numbers.length = 0;
        for(let i = 0 ; i<TotalNum ; i++){
            Numbers.push(RandomObj.getRandomNumber());
            GLOBALDOM.enqueueElement(
                '<b id="number" class="div__number">'+
                    Numbers[i]
                +'</b>'
            );

            if ((i+1) < TotalNum) {
                GLOBALDOM.enqueueElement(
                    '<input type="text" id="number" maxlength="1" class="div__input">'
                );
            }
        }
        Result = getResult();
    }



    const getResult = function(){
        let lastSign = 0;
        let ACUM = Numbers[0];


    
        for (let i=1; i < Numbers.length; i++) {
            if (ArraySign[lastSign++]) {
                ACUM += Numbers[i];
                
            } else {
                ACUM -= Numbers[i];
            }
        }
       // console.log(ACUM)
        return ACUM;
    
    }


    this.GenerateMath = () => {
        GenerateNumbers();
    }
    this.GenerateMath();


    this.getProblemResult = ()=>{
        return Result;
    }

    this.getNumbers = () => {
        return Numbers;
    }

    this.getSigns = () => {
        return ArraySign;
    }
} 




