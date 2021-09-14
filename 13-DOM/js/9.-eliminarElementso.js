// eliminar elementos en el dom
const primerEnlace=document.querySelector('a');

// eliminarse por si mismo
primerEnlace.remove();
console.log(primerEnlace);

// eliminar por el padre
const navegacion=document.querySelector('.navegacion');

// de esta manera con este metodo eliminamos un hijo que le indiquemos 
navegacion.removeChild(navegacion.children[2]);