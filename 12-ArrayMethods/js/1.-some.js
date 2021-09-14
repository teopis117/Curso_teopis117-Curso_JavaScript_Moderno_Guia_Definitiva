const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// como saber si en un arreglo existe algo

// comprobar si un valor existe en un arreglo

meses.forEach((mes)=>
{
if(mes==='Enero')
{
    console.log("enero si existe");
}
});

// de esta manera podemos saber si existe en nuestro arreglo
// recordemos que includes nos servia para saber si en una cadena contenia ciertos caracteres
const resultado=meses.includes('Enero');
console.log(resultado);


// en un arreglo de objetos se utiliza .some

const existe=carrito.some((iterador)=>
{
return iterador.nombre==='Celular';
})


console.log("arreglo de objetos con some:");
console.log(existe);

// en un arreglo tradicional con .some

const existe2=meses.some((mes)=>
{
    return mes==='Enero';
}
)

console.log("arreglo tradicional son some");
console.log(existe2);