function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

   // Agregamos el nuevo amigo al final del arreglo de amigos
   objetoUsuario.amigos.push(nuevoAmigo);

   // Retornamos el objeto modificado
   return objetoUsuario;
}

module.exports = agregarAmigo;
