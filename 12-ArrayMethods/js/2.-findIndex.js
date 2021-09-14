const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


// conocer  el indice de un elemento

meses.forEach((mes,indice)=>
{
    console.log(indice);
    console.log(mes);
    
});
// todos los array methods son arrow function
// con findidex nos ayuda a encontrar un indice

const indice=meses.findIndex((mes)=>
{
    return mes==='Abril';
});


console.log(indice);
// si nos retorna un -1 es que no lo pudo encontrar


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]



// encontrar el indice de un objeto en un arreglo de objetos

const existeCarrito=carrito.findIndex((objeto)=>
{
    return objeto.precio===200;
});


console.log("comprobando el contenido de un arreglo de objetos:");
console.log(existeCarrito);