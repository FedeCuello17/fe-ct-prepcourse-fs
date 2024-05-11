function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:

  // Asignamos la nueva contraseña al objetoUsuario
  objetoUsuario.password = nuevaPassword;

  // Retornamos el objeto modificado
  return objetoUsuario;
}

module.exports = actualizarPassword;
