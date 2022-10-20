const Random = function(M=999) {
    let MAX = M;
    //const ArrayNumbers = [];


    this.getMax = () => {
        return MAX;
    }

    this.setMax = (newMax) => {
        MAX = newMax;
    }
}

Random.prototype.getRandomNumber = function(){
    return Math.floor(Math.random()*this.getMax());
}

Random.prototype.getRandomBool = function(){
    const TORF = Math.floor(Math.random()*5)!=1? 1 : 0;
    return TORF;
}        
