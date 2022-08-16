const {encode, decode} = require('./encodeDecode.js');

describe ('tests encode and decode functions', () => {

    it( 'tests if encode is a function', () => {
        expect(typeof encode).toBe('function');
    
    });
    it( 'tests if decode is a function', () => {
        expect(typeof decode).toBe('function');
    
    });
    it( 'tests if encode("a,e,i,o,u") returns "1,2,3,4,5"', () => {
        expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
    
    });
    it( 'tests if decode("1,2,3,4,5") returns "a,e,i,o,u"', () => {
        expect(decode('a,e,i,o,u')).toBe('a,e,i,o,u');
    
    });

    it( 'tests if encode("b,c,d,h,j") returns "b,c,d,h,j"', () => {
        expect(encode('b,c,d,h,j')).toBe('b,c,d,h,j');
    
    });
    it( 'tests if encode("6,7,8,9") returns "6,7,8,9"', () => {
        expect(encode('6,7,8,9')).toBe('6,7,8,9');
    
    });

    it('tests if strings entered and returned are the same size', () => {
        expect(encode('pineapple is delicious').length).toBe(22);
    
    });

})