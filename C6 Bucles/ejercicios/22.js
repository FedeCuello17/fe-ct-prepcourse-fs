function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  function doWhile(num) {
    let contador = 0; // Variable para contar las veces que se ha incrementado num

    // Utiliza un bucle do-while para asegurarte de que el código se ejecute al menos una vez
    do {
        num += 5; // Aumenta el valor de num en 5
        contador++; // Incrementa el contador
    } while (contador < 8); // Repite el bucle hasta que el contador alcance 8

    return num; // Retorna el valor final de num
  }  
}

module.exports = doWhile;