// generar html desde js

// una forma muy comun
// estamos apenas construyendo el elemento mas no agregandolo al html
const enlace=document.createElement('A');
enlace.textContent="nuevo enlace";

enlace.href="#";
enlace.target="_blank";

// ahora que ya contruimos el enlace es bueno mostrarloe en html

const navegacion=document.querySelector('.navegacion');

// appendChild lo agregara al final
// navegacion.appendChild(enlace);

// para agregarlo en la posicion que querramos lo haremos con insertbefore lo que hara es que agregara el elemento antes del elemento que querramos osea el nodo de referencia

navegacion.insertBefore(enlace,navegacion.children[1]);

// crear un card de forma dinamica

// cerar 3 parrafos

const parrafo1=document.createElement('P');
parrafo1.textContent="concierto desde js";
parrafo1.classList.add("categoria","concierto");


const parrafo2=document.createElement('P');
parrafo2.textContent="concierto desde js mas creativo";
parrafo2.classList.add("titulo");


const parrafo3=document.createElement('P');
parrafo3.textContent="$8000";
parrafo3.classList.add("precio");


// crear div con la clase info
const info=document.createElement('DIV');
info.classList.add("info");

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen=document.createElement('IMG');

imagen.src="img/hacer4.jpg";
imagen.alt="texto alternativo con alt desde js";



// crear el card

const card=document.createElement('DIV');
card.classList.add("card");

//asignar la imagen

card.appendChild(imagen);

// asignar info
card.appendChild(info);


// insertar en el html

const contenedor=document.querySelector ('.hacer .contenedor-cards');

// contenedor.appendChild(card);
// agregar al incio
contenedor.insertBefore(card,contenedor.children[0]);


console.log(info);

