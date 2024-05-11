function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

    // Creamos un objeto para almacenar la frecuencia de cada número
    const frecuencia = {};

    // Iteramos sobre el array de números
    for (let num of numeros) {
      // Si el número ya está en el objeto frecuencia, significa que está repetido, lo retornamos
      if (frecuencia[num]) {
        return num;
      }
      // Si no está en el objeto, lo agregamos con una frecuencia de 1
      frecuencia[num] = 1;
    }
  
    // Si no se encuentra ningún elemento repetido, retornamos null
    return null;
}

module.exports = encontrarElementoRepetido;