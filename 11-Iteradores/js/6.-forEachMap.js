// forEach ideal para recorrer arreglos
// el foreach es un arrowfunction
const pendientes=["tarea","proyecto","estudiar js"];

pendientes.forEach((variable,indice) =>
{

     console.log(variable);
     console.log(indice);
    // console.log(pendientes[indice]);

})

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// recordemos que el foreach es bueno para recorrer un arreglo
carrito.forEach((variable,indice)=>
{
    console.log(variable);
})

// y el .map es bueno para poder guardar la informacion  de un arreglo en una variable
const arreglo2=carrito.map((variable,indice)=>
{
    return variable.nombre;
})

console.log(arreglo2);

