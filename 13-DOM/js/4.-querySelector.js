
const card=document.querySelector('.card');

// al igual que id solo nos retornara el primer elemento que encuentre 
console.log(card);



// podemos tener selectores especificos como css
const card2=document.querySelector('.premium .info');

console.log(card2);

// un section que tenga como clase hospedaje
//  y un hijo que tenga la clase .card

const segundoCard=document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// seleccionar el formulario
// tambien podemos seleccionar id y si encuentra varios nos mostrara el primero
const formulario=document.querySelector('#formualario');

// seleccionar elementos html
// en este caso seleccionamos la etiqueta nav
const navegacion=document.querySelector('nav');