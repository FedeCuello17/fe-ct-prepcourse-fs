function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

   // Recorremos el arreglo de usuarios
   for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    // Definimos la propiedad "esPremium" de cada usuario como true
    objetoMuchosUsuarios[i].esPremium = true;
  }

  // Retornamos el arreglo modificado
  return objetoMuchosUsuarios;
  
}

module.exports = pasarUsuarioAPremium;
