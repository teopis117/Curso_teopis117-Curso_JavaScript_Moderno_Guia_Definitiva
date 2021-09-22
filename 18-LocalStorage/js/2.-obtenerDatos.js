// para tener de regreso los elementos en el localStorage utilizamos el getItem

const nombre=localStorage.getItem('nombre');
console.log(nombre);



const productoJSON=localStorage.getItem('producto');
console.log(productoJSON);


// como convertirmos un string a un objeto/arreglo?
// ojo! siempre y cuando tenga la forma debida


console.log(JSON.parse(productoJSON));



