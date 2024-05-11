const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

   // Recorremos el array para buscar el elemento
   for (let i = 0; i < array.length; i++) {
    // Llamamos al callback pasándole el elemento actual y su índice
    // El callback debe devolver true si el elemento fue encontrado
    if (callback(array[i], i)) {
      // Si el callback devuelve true, retornamos el elemento
      return array[i];
    }
  }
  
  // Si el elemento no se encontró, retornamos el mensaje correspondiente
  return "No se encontró el elemento";
};

module.exports = buscarElemento;
