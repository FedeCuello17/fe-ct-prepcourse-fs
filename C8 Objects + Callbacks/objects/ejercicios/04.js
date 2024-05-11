function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

    // Utilizamos el método hasOwnProperty() para verificar si el objeto tiene la propiedad especificada
    return objeto.hasOwnProperty(propiedad);
}

module.exports = verificarPropiedad;
