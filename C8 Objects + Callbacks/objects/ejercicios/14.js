function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  // Utilizamos el operador de igualdad estricta (===) para verificar si la propiedad "email" tiene un valor definido
  return objetoUsuario.email !== undefined && objetoUsuario.email !== null;
}

module.exports = tieneEmail;
