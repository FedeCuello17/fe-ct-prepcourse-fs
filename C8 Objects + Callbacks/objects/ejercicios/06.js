const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let contador = 0;
  // Iteramos sobre el objeto utilizando un bucle for-in
  for (let _ in objeto) {
    // Por cada propiedad encontrada, incrementamos el contador
    contador++;
  }

  // Retornamos el total de propiedades
  return contador;
};

module.exports = contarPropiedades;
