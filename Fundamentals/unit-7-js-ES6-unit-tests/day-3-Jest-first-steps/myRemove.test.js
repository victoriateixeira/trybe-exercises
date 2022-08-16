const myRemove = require('./myRemove.js')

 describe('tests myRemove function', () => {
    // it('tests if removes 3 from [1,2,3,4]', () => {
    //    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
    // });
    it('tests if removes 3 from [1,2,3,4]', () => {
       expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    });
    it('tests if myRemove([1, 2, 3, 4], 3) does not return [1,2,3,4]', () => {
       expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('tests if removes 5 from [1,2,3,4,5]', () => {
        expect(myRemove([1, 2, 3, 4, 5], 5)).not.toContain(5);
     });

 })