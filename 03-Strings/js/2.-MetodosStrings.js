// metodos para los strings o cadenas de texto

// para saber el tamaño de una string podemos utilizar el metodo de length que esta disponible en estos casos

const producto="Monitor de 20 pulgadas";

//el metodo length es uno de los pocos metodos que no ocupan parentesis
console.log(producto.length);
console.log("probando el meotodo de indexOf");
console.log("la palabra 'pulgadas' la encontramos en la pocision: "+producto.indexOf("pulgadas"));


// para encontrar una palabra,letra etc podemos utilizar el metodo de includes

// si no encontramos el elemento nos retornara un false
console.log(producto.includes('tablet'));

// si encontramos el elemento nos retornara un true
console.log(producto.includes('Monitor'));

//en estos casos recordamremos que  son sensibles a los caracteres asi que si distinguiran las minisculas y mayusuculas
console.log(producto.includes('monitor'));
