//un metodo que nos permita reemplazar un texto
//con el metodo replace
const producto="Monitor 20 pulgadas";

// .replace para reemplazar
console.log(producto);

console.log(producto.replace("pulgadas","cms"));
console.log(producto.replace("Monitor","Monitor curvo"));
// ----------------------------------------------------

//slice nos sirve para extraer o cortar una cadena de texto

// .slice para cortar

console.log(producto.slice(0,10));

// si no le colocamos el segundo valor con el que tiene ira hacia delante a limpiar la cadena

console.log(producto.slice(6));

// si nos equivocamos en el orden no nos mostrara nada
console.log(producto.slice(11,10));
// ----------------------------------------------------
// Substring
// susbtring es la alternativa a slice y cuando hacemos el error de que pasarle un error del inicio lo cambiara de orden para que pueda ser porsible la operacion
console.log(producto.substring(0,10));
const usuario="jose";
// mostrar la primera letra
console.log(producto.substring(0,1));

// -------------------------------------------
// Charat nos servira para extraer un caracter en la posicion que le indiquemos

console.log(usuario.charAt(0));








