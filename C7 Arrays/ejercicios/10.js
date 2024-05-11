function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (let i = 0; i < array.lenght; i++) {
    if (typeof array[i] === 'string' && array[i].lenght > 5) {
      return array[i];
    }
  }

  return null;
}

module.exports = obtenerPrimerStringLargo;
