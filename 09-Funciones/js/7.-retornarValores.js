function sumar(a,b)
{
    // con return nos ayuda a regresar el valor de las operaciones dentro de la funcion
    return a+b;
}

const resultado=sumar(2,3);


console.log(resultado);

//ejemplo mas avanzado

// donde iremos guardando los valores de las compras
let total=0;

function agregarCarrito(precio)
{
    return total+=precio;
}

total=agregarCarrito(100);
total=agregarCarrito(400);
total=agregarCarrito(200);

function impuestos(total)
{
    return total*1.15;
}

const totalapagar=impuestos(total);
console.log("total antes de impuestos"+total);
console.log(`total despues de impuests${parseInt(totalapagar)}`);