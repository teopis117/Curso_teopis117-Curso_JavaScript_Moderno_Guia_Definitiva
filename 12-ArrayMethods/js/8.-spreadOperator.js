const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con el spread operator no modificamos el arreglo original
const meses2=[...meses,'Agosto'];
console.log(meses2);

const producto={nombre:'Disco Duro',precio:300};
// colocar al final 
const carrito2=[...carrito,producto];
// colocar al inicio
const carrito2=[producto,...carrito];
console.log(carrito);
console.log(carrito2);