//forma imperativa es cuando modificaremos el elemento actual

const meses=['enero','febrero','marzo','abril','mayo','junio'];
console.table(meses);

// eliminar el ultimo elemento del arreglo

meses.pop();
console.table(meses);

// eliminar el primer elemento del arreglo
meses.shift();
console.table(meses);


// eliminar una posicion especifica de un elemento

meses.splice(0,1);
console.table(meses);
