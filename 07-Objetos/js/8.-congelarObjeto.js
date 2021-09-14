"use strict";
// "use strict"; habilita el modo estricto pero tambien nos va a permitir varios metodos de objetos

const persona = {
    
    nombre:"jose",
    
    apellido:"diaz",
    disponible:true,
};

// agregando el use strict
// como hacemos para que nuestro objeto no sea modificado

Object.freeze(persona);
// persona.nombre="carlos"; y si corrieamos ahora si esto estaria mal

// y tampoco podemos agregar nuevas propiedades a nuestro objeto
// persona.edad=12;

// como saber si un objeto esta congelado?
console.log(Object.isFrozen(persona));


console.log(persona);



