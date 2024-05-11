function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x >= y) {
    return x;
  } else {
    return y;
  }

}

console.log(obtenerMayor(2, 1));
console.log(obtenerMayor(2, 2));
console.log(obtenerMayor(5, 10));

module.exports = obtenerMayor;
