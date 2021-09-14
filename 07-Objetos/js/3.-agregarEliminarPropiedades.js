const persona = {
    
    nombre2:"jose",
    
    apellido:"diaz",
}

// Agregar nuevas propiedades al objeto

// como estamos fuera del objeto si asignamos con el signo de igual
console.log(persona);
persona.imagen="imagen.jgp";
console.log(persona);


//eliminar una propiedad

delete persona.apellido;

console.log(persona);