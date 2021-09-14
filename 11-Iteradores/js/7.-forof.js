const pendientes=["tarea","proyecto","estudiar js"];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// forof
// una forma mas compacta de un for y foreach
// pero forof nos recorre un arreglo
for(let iterador of pendientes)
{
    console.log(iterador);
}

for(let iterador of carrito)
{
    console.log(iterador.precio);
}




