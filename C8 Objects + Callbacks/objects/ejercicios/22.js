function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   const lowerStr1 = str1.toLowerCase();
   const lowerStr2 = str2.toLowerCase();

     // Primero, comprobamos si las longitudes de los dos strings son diferentes.
  if (lowerStr1.length !== lowerStr2.length) {
   return false;
 }

 // Luego, convertimos ambos strings a arreglos de caracteres para facilitar la comparación.
 const arr1 = lowerStr1.split('');
 const arr2 = lowerStr2.split('');

 // Ordenamos los arreglos de caracteres.
 arr1.sort();
 arr2.sort();

 // Comparamos si los arreglos ordenados son iguales.
 for (let i = 0; i < arr1.length; i++) {
   if (arr1[i] !== arr2[i]) {
     return false;
   }
 }

 // Si todos los caracteres coinciden en ambos arreglos, entonces son anagramas.
 return true;
}

module.exports = esAnagrama;
