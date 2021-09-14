// podemos definir arreglos dentro de otro arreglos esto es conocido como matrices
const numeros=[1231,23,42,4,24,5,33,[2,3,4,5]];

console.log(numeros);
console.table(numeros);

// acceder al indice no.0

console.log(numeros[0]);

// si accedemos a un indice que no existe nos retornara un undefined

// acceder a un arreglo dentro de otro arreglo

console.log(numeros[7][2]);
