function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   
   // Usamos el método filter para filtrar los elementos que comienzan con la letra "a"
   let filteredArray = arrayOfStrings.filter((element) => {
      // Comprobamos si el primer carácter del elemento es "a" (ignorando mayúsculas y minúsculas)
      return element.charAt(0).toLowerCase() === 'a';
   });

   // Retornamos el nuevo arreglo con los elementos que comienzan con "a"
   return filteredArray;
}

module.exports = filter;
