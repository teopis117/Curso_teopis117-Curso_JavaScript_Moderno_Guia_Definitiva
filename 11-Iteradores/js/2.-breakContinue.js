for(let i=0;i<10;i++)
{
    if(i===5)
    {
        console.log("este es el no.5");
    }
    console.log(i);
}

// break termina el ciclo
// continue terminara esa vuelta pero continuara la ejecucion del for

// en que casos utilizar el continue

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300,descuento:true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


for(let i=0;i<10;i++)
{
    if(carrito[i].descuento)
    {
        console.log(`el articulo ${carrito[i].nombre} tiene un descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}