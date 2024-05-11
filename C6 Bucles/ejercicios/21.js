function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

    // Si el número es menor o igual que 0, no es una potencia de 2
    if (numero <= 0) {
      return false;
  }
  
  // Dividimos repetidamente el número por 2 hasta que sea 1
  while (numero > 1) {
      // Si el número no es divisible exactamente por 2, no es una potencia de 2
      if (numero % 2 !== 0) {
          return false;
      }
      // Dividimos el número por 2
      numero = numero / 2;
  }
  
  // Si llegamos aquí y el número es 1, entonces es una potencia de 2
  return numero === 1;
}

module.exports = esPotenciaDeDos;
