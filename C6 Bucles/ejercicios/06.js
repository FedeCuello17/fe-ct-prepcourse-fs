function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  return num >= 100 && num <= 900 ;
}

console.log(tieneTresDigitos(1));
console.log(tieneTresDigitos(784));

module.exports = tieneTresDigitos;
