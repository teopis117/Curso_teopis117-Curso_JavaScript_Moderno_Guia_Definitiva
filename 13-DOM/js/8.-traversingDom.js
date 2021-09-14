// en js  todo esta conectado al html y nos podemos mover con traversing de dom

  const navegacion=document.querySelector('.navegacion');

// console.log(navegacion);
// console.log(navegacion.childNodes);//los espacios en blanco son considerados en elemetos

// console.log(navegacion.children); los espacios en blanco tambien son considerados eelmetnos


const card=document.querySelector('.card');

// de esta manera iremos viajando a traves de elementos hijos y demas
// estamos accediendo al elemento No.2 recordemos que como son arreglos estos comienzan desde 0
card.children[1].children[1].textContent="traversing en Dom";
console.log(card.children[1].children[2]);

console.log(card.children[0]);

// como cambiar la imagen a traves del Traversing
card.children[0].src="img/hacer2.jpg";


// traversing the hijo al padre

console.log(card.parentElement);


// seleccionar al siguiente elemento o el hermano 
console.log(card.nextSibling);



const ultimoCard=document.querySelector('.card:nth-child(4)');

// de esta manera podemos acceder al anterior hermano
console.log(ultimoCard.previousElementSibling);
 




// escoger el primer hijo 
console.log(navegacion.firstChild);

// escoger al ultimo hijo
console.log(navegacion.lastChild);