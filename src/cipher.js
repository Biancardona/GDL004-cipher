window.cipher = {
  let encode = function(offset, string) {
    let i;
    //Declarando variable para concatenar caracteres
    let encodedString = "";
    //Recorrer cadena
    for (i = 0; i < string.length; i++) {
      //Obteniendo codigo ascii 
      let asciiCode = string.charCodeAt(i);
      let encoded = ((asciiCode - 65 + offset) % 26) + 65;
      //Convirtiendo codigo ascci a string
      let character = String.fromCharCode(encoded);
      //Concatenando caracter
      encodedString = encodedString.concat(character);
    }
    return encodedString;

  }

};
