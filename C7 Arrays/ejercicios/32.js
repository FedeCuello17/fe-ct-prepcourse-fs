function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

    // Convertimos el string a minúsculas y eliminamos los espacios en blanco
    string = string.toLowerCase().replace(/\s/g, '');
    // Comparamos el string original con su versión invertida
    return string === string.split('').reverse().join('');
}

module.exports = esPalindromo;