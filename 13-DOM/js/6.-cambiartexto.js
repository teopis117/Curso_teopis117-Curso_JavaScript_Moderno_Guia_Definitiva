const encabezado=document.querySelector('.contenido-hero h1');

// si en el css- visibility :hidden no lo va a encontrar
console.log(encabezado.innerText);
//lo encuentra en donde sea
console.log(encabezado.textContent);
// innerHTML nos mostrara todo el html dentro de nuestro elemento
console.log(encabezado.innerHTML);

// nos mostrara todo el contenido sin el html
const encabezado2=document.querySelector('.contenido-hero h1').textContent;

// cambiando el texto de esta manera
// document.querySelector('.contenido-hero h1').textContent="nuevo heading";

// cambiandolo desde una variable

// const nuevoHeading="nuevoHeading";
// document.querySelector('.contenido-hero h1').textContent=nuevoHeading;


// como modificar la imagen
const imagen=document.querySelector('.card img');
console.log(imagen);


imagen.src='img/hacer2.jpg';