function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  // Encontrar el mínimo y el máximo número en el array
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  // Calcular la suma total esperada de la secuencia
  const sumaEsperada = ((min + max) * (max - min + 1)) / 2;

  // Calcular la suma real de los números en el array
  const sumaReal = numeros.reduce((acc, curr) => acc + curr, 0);

  // Calcular el número faltante
  const numeroFaltante = sumaEsperada - sumaReal;

  // Si no hay número faltante, devuelve null
  if (numeroFaltante === 0) {
    return null;
  }

  return numeroFaltante;
}

module.exports = encontrarNumeroFaltante;