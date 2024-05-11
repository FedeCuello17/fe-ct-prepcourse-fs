function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

   // Si el número es menor o igual que 1, no es primo
   if (numero <= 1) {
    return false;
}

// Itera desde 2 hasta la mitad del número
for (let i = 2; i <= numero / 2; i++) {
    // Si el número es divisible exactamente por algún otro número en ese rango, no es primo
    if (numero % i === 0) {
        return false;
    }
}

// Si no se encontró ningún divisor diferente de 1 y el propio número, entonces es primo
return true;

}

module.exports = esNumeroPrimo;
