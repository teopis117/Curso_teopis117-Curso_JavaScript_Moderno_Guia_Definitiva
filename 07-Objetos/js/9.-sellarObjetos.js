"use strict";
const persona = {
    
    nombre:"jose",
    
    apellido:"diaz",
    disponible:true,
};



// la diferencia de sellar con congelar es que  si podemos modificar las propiedades ,pero no podemos de igual manera agregar o eliminar propiedades

console.log(persona.nombre);
Object.seal(persona);

persona.nombre="carlos";

console.log(persona.nombre);