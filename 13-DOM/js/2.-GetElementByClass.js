// seleccionar elementos por su clase forma un poco antigua

const header=document.getElementsByClassName('header');

console.log(header);

const hero=document.getElementsByClassName('hero');
console.log(hero);

//si las clases existen mas de una vez

// si una clase existe nos retoranara todos los elementos que contengan esa clasa
const contenedores=document.getElementsByClassName('contenedor');
console.log(contenedores);

// y si no encuentra ningun elemento nos retornara un arreglo vacio