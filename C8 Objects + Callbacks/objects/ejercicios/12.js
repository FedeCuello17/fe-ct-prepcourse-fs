function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:

   // Accedemos al valor de la propiedad "numeroMisterioso" y lo multiplicamos por 5
   var resultado = objetoMisterioso.numeroMisterioso * 5;
  
   // Retornamos el resultado
   return resultado;
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
