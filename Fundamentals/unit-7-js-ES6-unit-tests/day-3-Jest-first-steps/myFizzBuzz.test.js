const myFizzBuzz = require('./myFizzBuzz.js');

describe('myFizzBuzz function', () => {

    it('tests fizzbuzz number', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('tests fizz number', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('tests buzz number', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('tests other number', () => {
        expect(myFizzBuzz(14)).toBe(14);
    });
    it('tests if parameter is number', () => {
        expect(myFizzBuzz('9')).toBe(false);
    });
})
