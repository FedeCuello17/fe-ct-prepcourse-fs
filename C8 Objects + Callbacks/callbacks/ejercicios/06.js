function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  // Creamos un nuevo arreglo para almacenar los resultados
  let newArray = [];

  // Iteramos sobre cada elemento del arreglo
  for (let i = 0; i < array.length; i++) {
    // Llamamos al callback pasándole el elemento actual del arreglo como argumento
    // y guardamos el resultado en el nuevo arreglo
    newArray.push(cb(array[i]));
  }

  // Retornamos el nuevo arreglo con los resultados
  return newArray;
}

module.exports = map;
