// con document accedemos al documento html en general
let elemento=document.all;
//  y conforme vayamos trabajando con el document ahora vamos con el head y en general podemos ir especificando cada vez ms
elemento=document.head;

// podemos seleccionar cualquier cosa del html con sj
elemento=document.forms[0].id;

// nos da todos los enlaces
elemento=document.links;

// podemos saber cuantas imagenes hay en general

elemento=document.images;
console.log(elemento);