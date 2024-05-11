function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

    // Utilizamos el método sort() para ordenar la lista de objetos
    list.sort((a, b) => {
      // Comparamos las propiedades de los objetos según la letra especificada
      if (a[sortBy] < b[sortBy]) {
         return 1; // Si a es menor que b, colocamos b antes que a (orden descendente)
      } else if (a[sortBy] > b[sortBy]) {
         return -1; // Si a es mayor que b, colocamos a antes que b (orden descendente)
      } else {
         return 0; // Si son iguales, no se cambia el orden relativo
      }
   });

   // Retornamos la lista de objetos ordenada
   return list;
}

module.exports = sort;
