const assert = require ('chai').assert;
const FizzBuzz = require('../app/FizzBuzz');

describe('Test Kata FizzBuzz', function () {

    it('test if not multiple of 3 or 5 return a number', function () {
        const number = 4;
        const object = new FizzBuzz(number);
        const result = object.return();
        assert.equal(result, number);
    });

    it('test if number is multiple of 3 return Fizz', function () {
        const number = 3;
        const object = new FizzBuzz(number);
        const result = object.return();
        assert.equal(result,'Fizz');
    });

    it('test if number is multiple of 5 return Buzz', function () {
        const number = 5;
        const object = new FizzBuzz(number);
        const result = object.return();
        assert.equal(result,'Buzz');
    });

    it('test if number is multiple of 3 and 5 return FizzBuzz', function () {
        const number = 15;
        const object = new FizzBuzz(number);
        let result = object.return();
        assert.equal(result,'FizzBuzz');
    });

});