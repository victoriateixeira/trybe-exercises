function encode(phrase) {
    let replacements = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    
    let codedPhrase;
    
    for (let key in replacements) {
      letter = key.toString();
      number = replacements[key];
    codedPhrase = phrase.replaceAll(letter,number);
    phrase = codedPhrase;
    }
    return codedPhrase;
    }
    
    
    
    function decode(codedPhrase) {
      let replacements = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
      };
      
      let decodedPhrase;
      
      for (let key in replacements) {
        letter = key.toString();
        number = replacements[key];
      decodedPhrase = codedPhrase.replaceAll(number,letter);
      codedPhrase = decodedPhrase;
      }
      return decodedPhrase;
    }

    module.exports = {encode, decode};