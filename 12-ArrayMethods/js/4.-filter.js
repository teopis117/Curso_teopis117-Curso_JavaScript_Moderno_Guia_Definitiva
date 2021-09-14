const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// va a crear un nuevo arreglo en el parametro que es evaluado


let resultado=carrito.filter((objeto)=>
{
    return objeto.precio>400;
})

// nos creara el arreglo con la condicion que evaluaremos
console.log(resultado);

resultado=carrito.filter((objeto)=>
{
    // asignar todos los elementos que no sean audifonos
    return objeto.nombre!=='Audifonos';
})

console.log(resultado);