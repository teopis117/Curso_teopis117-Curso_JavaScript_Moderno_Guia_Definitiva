const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// tomar una gran cantidad de datos y unirlos y mostrarnos


// con un foreach

let total=0;

carrito.forEach((producto)=>
{
    return total+=producto.precio;
})

console.log(total);

// reduce es algo diferente a los array methods que hemos visto anteriormente


let resultado=carrito.reduce(()=>
{

});