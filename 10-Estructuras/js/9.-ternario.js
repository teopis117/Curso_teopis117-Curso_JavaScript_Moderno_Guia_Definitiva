//operador ternario

const autenticado=true;
const pagar=true;
console.log(autenticado ? "si esta autenticado":"no esta auntenticado");


console.log(autenticado ? "si esta autenticado":null);

console.log(autenticado || pagar ? "si esta autenticado":null);
console.log(autenticado && pagar ? "si esta autenticado":null);