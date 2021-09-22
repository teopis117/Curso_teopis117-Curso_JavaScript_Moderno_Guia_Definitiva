// localStorage pertenece a la api de js

// como agregar elementos al local storage

// dentro de los parentesis le pasamos la llave y el valor
// --solamente podemos guaradr strings
localStorage.setItem('nombre','juan');

// localStorage aguanta mas tiempo que sessionStorage

// almacenamiento de sesion
sessionStorage.setItem('nombre','carlos');


const producto=
{
    nombre:"monitor 24 pulgadas",
    precio:300,
}

// convierte un objeto en una string

const productoString= JSON.stringify(producto);

console.log(typeof productoString);

localStorage.setItem('producto',productoString);

