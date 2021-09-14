const persona = {
    
    nombre2:"jose",
    
    apellido:"diaz",
    disponible:true,
}

// gracias a ecmascript hay una nueva forma de hacer eso

// destructuring nos permite extraer la informacion de la propiedad y guardarlo en una variable
const {nombre2,apellido,disponible} = persona;
console.log(nombre2);
console.log(apellido);
console.log(disponible);
