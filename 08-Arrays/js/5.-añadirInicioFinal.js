const meses=['enero','febrero','marzo','abril'];

// metodos que nos ayudan a agregar elementos la inicio y al final

// de esta manera lo podemos agregar pero no siempre sabremos si esta disponible el lugar
// meses[4]='mayo';

// agregar elementos al final de un arreglo
meses.push('mayo');


// los arreglos pueden contener objetos
const carrito=[];



const producto={
    nombre:"monitor de 20 pulgadas",
    precio:300,
}
const celular={
    nombre:"celuar",
    precio:1300,
}

carrito.push(producto);
carrito.push(celular);

console.table(carrito);
const teclado={
    
    nombre:"teclado",
    precio:233,
}

// agregar un elemento al incio de este arreglo
carrito.unshift(teclado);
console.table(carrito);

