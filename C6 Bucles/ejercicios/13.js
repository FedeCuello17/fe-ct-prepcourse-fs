function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:

   if (Number.isInteger(num)) {
    return true; // Retorna true si el número es un entero
  } else {
    return false; // Retorna false si el número no es un entero
  }
}

module.exports = esEntero;
