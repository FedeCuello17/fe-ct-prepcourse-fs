/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  // Utilizamos Object.entries() para obtener una matriz de pares clave:valor del objeto
  const entradas = Object.entries(objeto);
  
  // Mapeamos la matriz de pares clave:valor en un nuevo arreglo de arreglos
  const arregloDeArreglos = entradas.map(([clave, valor]) => [clave, valor]);

  // Retornamos el arreglo de arreglos resultante
  return arregloDeArreglos;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  // Creamos un objeto para almacenar la cantidad de veces que aparece cada letra
  const count = {};

  // Recorremos el string
  for (let i = 0; i < string.length; i++) {
    const letra = string[i].toLowerCase(); // Convertimos la letra a minúscula para hacer el conteo insensible a mayúsculas y minúsculas
    if (count[letra]) {
      // Si la letra ya existe como propiedad en el objeto, incrementamos su valor en 1
      count[letra]++;
    } else {
      // Si la letra no existe como propiedad en el objeto, creamos una nueva propiedad con el nombre de la letra y le asignamos el valor 1
      count[letra] = 1;
    }
  }

  // Retornamos el objeto con el conteo de letras
  return count;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let mayusculas = '';
  let minusculas = '';

  // Recorremos el string para separar las letras en mayúscula y en minúscula
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      mayusculas += string[i];
    } else {
      minusculas += string[i];
    }
  }

  // Concatenamos las letras en mayúscula seguidas por las letras en minúscula
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

   // Dividimos la frase en palabras usando el espacio como separador
    const palabras = frase.split(' ');

    // Mapeamos cada palabra y la invertimos
    const palabrasInvertidas = palabras.map(palabra => {

   // Dividimos la palabra en letras, invertimos el orden y luego la unimos nuevamente  
    return palabra.split('').reverse().join('');
  })
// Unimos las palabras invertidas en una sola cadena, separadas por un espacio
 return palabrasInvertidas.join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

   // Convertimos el número a string para poder invertirlo más fácilmente
   const numeroStr = numero.toString();

   // Invertimos el número convirtiendo el string en un arreglo, invirtiendo el orden y luego uniendo nuevamente en un string
   const numeroInvertido = numeroStr.split('').reverse().join('');
 
   // Comparamos el número original con su reverso
   if (numeroStr === numeroInvertido) {
     // Si son iguales, el número es capicúa
     return "Es capicua";
   } else {
     // Si son diferentes, el número no es capicúa
     return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

   // Utilizamos el método replace() para eliminar las letras "a", "b" y "c" del string
   return string.replace(/[abc]/g, '');
  }
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

   // Utilizamos el método sort() con una función de comparación
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

   // Creamos un nuevo arreglo para almacenar los elementos en común
   const interseccion = [];

   // Recorremos uno de los arreglos (puede ser cualquiera)
   for (let i = 0; i < array1.length; i++) {
     // Verificamos si el elemento actual está presente en el otro arreglo
     if (array2.includes(array1[i])) {
       // Si el elemento está presente, lo agregamos al arreglo de intersección
       interseccion.push(array1[i]);
     }
   }
 
   // Retornamos el arreglo de intersección
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
