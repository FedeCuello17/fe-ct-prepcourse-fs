function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  // Utilizamos el operador de igualdad estricta (===) para comparar la propiedad "password" con el parámetro "password"
  return objetoUsuario.password === password;
}

module.exports = verificarPassword;
