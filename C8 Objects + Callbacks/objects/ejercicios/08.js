function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:

   // Creamos el objeto con las propiedades "nombre" y "edad"
   let gato = {
    nombre: nombre,
    edad: edad
  };

  // Agregamos la propiedad "meow" que es una función
  gato.meow = function() {
    return "Meow!";
  };

  // Retornamos el objeto creado
  return gato;
}

module.exports = crearGato;
