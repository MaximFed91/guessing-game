class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min + 1;
        this.max = max -1;
        this.gues = Math.round((this.max+this.min)/2);
        

    }

    guess() {
        console.log(this.min + ' '+this.max+ ' '+this.gues);
        return this.gues;
    }

    lower() {
        this.max = this.gues-1;
        this.gues = Math.round((this.max+this.min)/2);
    }

    greater() {
        this.min = this.gues+1 ;
        this.gues = Math.round((this.max+this.min)/2);
    }
}

module.exports = GuessingGame;
