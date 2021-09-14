const carrito=[
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


const arreglo1=carrito.map( function(producto)
{
    return `${producto.nombre}-precio${producto.precio}`;
})

const arreglo2=carrito.forEach( function(producto)
{
    return `${producto.nombre}-precio${producto.precio}`;
})

// la diferencia es que .map creara un arreglo de recorrer el arreglo y el foreache no lo hara

console.log(arreglo1)
console.log(arreglo2)