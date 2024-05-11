function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:

   // Agregamos la propiedad "calcularPrecioDescuento" al objetoProducto
   objetoProducto.calcularPrecioDescuento = function() {
    // Multiplicamos el precio del producto por el porcentaje de descuento
    let descuento = this.precio * this.porcentajeDeDescuento;
    // Restamos el descuento del precio total del producto
    let precioFinal = this.precio - descuento;
    // Retornamos el precio final
    return precioFinal;
  };

  // Retornamos el precio final
  return objetoProducto.calcularPrecioDescuento();
}

module.exports = agregarMetodoCalculoDescuento;
