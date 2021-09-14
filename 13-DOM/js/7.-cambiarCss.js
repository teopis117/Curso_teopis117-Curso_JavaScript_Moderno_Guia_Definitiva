// en js es posible agregar codigo css agregando clases,eliminandolas,etc


const encabezado=document.querySelector('h1');

console.log(encabezado.style);

// las mismas propiedades de css las encontraremos en js
// encabezado.style.backgroundColor="red";
// encabezado.style.fontFamily="Arial";
// encabezado.style.textTransform="uppercase";


const card=document.querySelector(".card");
// como agregar una clase con js
card.classList.add('nueva-clase','segunda-clase');
// remover una clase con js
card.classList.remove('nueva-clase');
console.log(card.classList);
