function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:

   // Agregamos una nueva propiedad al objeto con el nombre recibido por parámetro y valor null
   objeto[propiedad] = null;

   // Retornamos el objeto modificado
   return objeto;
}

module.exports = agregarPropiedad;
