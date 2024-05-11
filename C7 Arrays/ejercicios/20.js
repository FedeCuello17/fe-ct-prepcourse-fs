// Creamos un arreglo con un tamaño específico (por ejemplo, 5)
var newArray = new Array(5);

// Llenamos el arreglo con el valor true
newArray.fill(true);

// Cambiamos los elementos a false según sea necesario
for (let i = 0; i < newArray.length; i++) {
  if (condición) { // Reemplaza "condición" por la condición que desees
    newArray[i] = false;
  }
}

// El arreglo newArray ahora contendrá true en todos los elementos, excepto aquellos que hayan sido cambiados a false según la condición.
