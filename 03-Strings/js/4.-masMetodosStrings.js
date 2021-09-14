const producto="                monitor 20 pulgadas              ";

// metodos que nos permiten eliminar espacios

console.log(producto);
console.log(producto.length);

//eliminar espacios en blanco del inicio...
console.log(producto.trimStart());

//eliminar espacios en blanco del inicio...
console.log(producto.trimEnd());

// chaining colocar dos metodos juntos 
// juntamos la funcion del inicio y al final
console.log(producto.trimStart().trimEnd());


// tambien existe la propiedad de hacer lo mismo pero en uno solo
//elimina los espacios en blanco del inicio y final
console.log(producto.trim());