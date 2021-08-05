class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.gues = Math.round((this.max-this.min)/2) + this.min;
        

    }

    guess() {
        return this.gues;
    }

    lower() {
        this.max = this.gues-1;
        this.gues = Math.round((this.max-this.min)/2) + this.min;
    }

    greater() {
        this.min = this.gues + 1 ;
        this.gues = Math.round((this.max-this.min)/2) + this.min;
    }
}

module.exports = GuessingGame;
