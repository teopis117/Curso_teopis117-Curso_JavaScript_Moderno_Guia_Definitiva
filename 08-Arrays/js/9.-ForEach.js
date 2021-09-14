const carrito=[
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// for(let i=0;i<carrito.length;i++)
// {
//     console.log(carrito[i].nombre);
// }

// javascript tiene sus propios metodos para realizar lo mismo utiliazndo foreach
// esto es un metodo

carrito.forEach( function(producto)
{
    console.log(`${producto.nombre}-precio${producto.precio}`);
})

// esto es una funcion
// jugar();