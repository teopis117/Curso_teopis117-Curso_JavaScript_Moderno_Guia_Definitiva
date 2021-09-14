const carrito=[];



const producto={
    nombre:"monitor de 20 pulgadas",
    precio:300,
}
const celular={
    nombre:"celuar",
    precio:1300,
}

// formas declarativas e imperativas

// forma declarativa es la forma que no modifica el arreglo sino que crea una nueva

let resultado;

resultado=[...carrito,producto];