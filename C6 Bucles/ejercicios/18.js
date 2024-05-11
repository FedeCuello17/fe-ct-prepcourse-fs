function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Verifica si b es menor que a
  if (b < a) {
    return 0; // Si b es menor que a, no hay números entre ellos para multiplicar
}

let producto = 1;
// Itera desde a hasta b
for (let i = a; i <= b; i++) {
    producto *= i; // Multiplica cada número por el producto acumulado
}

return producto;
}

module.exports = productoEntreNúmeros;