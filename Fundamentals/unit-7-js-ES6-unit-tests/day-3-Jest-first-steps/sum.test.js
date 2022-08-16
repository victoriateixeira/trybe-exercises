const sum = require('./sum.js');


describe ('Tests sum function', () => {

    it ('tests if sum(4,5) equals 9', () => {
        expect(sum(4,5)).toBe(9);
    });

    it ('tests if sum(0,0) equals 0', () => {
        expect(sum(0,0)).toBe(0);
    });
    it ('tests if sum throws an error when parameters are not numbers', () => {
        expect(() => {sum()}).toThrow();

    });
    it ('tests if sum throws an error message when parameters are not numbers', () => {
        expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));

    });
})