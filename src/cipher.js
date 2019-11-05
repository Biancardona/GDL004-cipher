window.cipher = {
  encode (offset, string) {
    let i;
    //Declarando variable para concatenar caracteres
    let encodedString = ""; //Cadena vacia
    //Recorrer cadena
    for (i = 0; i < string.length; i++) { //Ciclo para cada caracter
      //Obteniendo codigo ascii de cada caracter
      let asciiCode = string.charCodeAt(i);
      let encoded = ((asciiCode - 65 + parseInt(offset)) % 26) + 65;
      //Convirtiendo codigo ascii a string
      let character = String.fromCharCode(encoded);
      //Concatenando caracter
      encodedString = encodedString.concat(character);
    }
    return encodedString;
  },
   decode1 (offset, string) {
    let i;
    //Declarando variable para concatenar caracteres
    let decodedString = ""; //Cadena vacia
    //Recorrer cadena
    for (i = 0; i < string.length; i++) { //Ciclo para cada caracter
      //Obteniendo codigo ascii de cada caracter
      let asciiCode = string.charCodeAt(i);
      let decoded = ((asciiCode - 65 + parseInt(offset)) % 26) - 65;
      //Convirtiendo codigo ascii a string
      let character = String.fromCharCode(decoded);
      //Concatenando caracter
      decodedString = decodedString.concat(character);
    }
    return decodedString;
  }
};



