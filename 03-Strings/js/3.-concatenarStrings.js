const producto="monitor 20 pulgadas";
const precio="30 USD";

// concatenar 2 strings

console.log(producto.concat(precio));

console.log(producto.concat("en descuento"));

console.log("El producto "+producto+"tiene un precio de "+ precio);
console.log("El producto ",producto,"tiene un precio de ", precio);

// template strings o template literals

console.log(`El producto ${producto} tiene un precio de ${precio}`);
