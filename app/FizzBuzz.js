module.exports = class FizzBuzz {
    constructor(number) {
        this.number = number;
    }

    return(){
        let value = '';
        if( this.number % 3 === 0 ){
            value += 'Fizz';
        }

        if(this.number % 5 === 0 ){
            value += 'Buzz';
        }

        return value || this.number;
    }
};
