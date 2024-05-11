function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

   // Utilizamos el operador "in" para verificar si el objeto tiene la propiedad especificada
   return propiedad in objeto;
}

module.exports = tienePropiedad;
