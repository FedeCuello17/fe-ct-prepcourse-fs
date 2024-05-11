function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var mayoresA10 = array.filter(function(elemento) {
    return elemento > 10;
  });
  return mayoresA10.length;
}

module.exports = contarElementosMayoresA10;
