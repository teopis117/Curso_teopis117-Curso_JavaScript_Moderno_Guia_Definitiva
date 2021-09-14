const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// foreach

let resultado="";

carrito.forEach((producto,indice)=>
{
     if(producto.nombre==='Tablet'){
         resultado=carrito[indice];
     }
})

console.log(resultado);

// find solo nos retornara el primer elemento que encuentre 
let resultado2=carrito.find((producto)=>
{
    return producto.nombre==='Tablet';
})
console.log(resultado2);