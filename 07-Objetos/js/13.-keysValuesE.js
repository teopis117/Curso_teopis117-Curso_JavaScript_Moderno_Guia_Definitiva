const persona = {
    
    nombre:"jose",
    
    apellido:"diaz",
    disponible:true,
};


console.log(persona);


console.log("objetc keys");
// con Object.keys nos retornara los campos o las variables donde guardaremos los valores parte izquiera
console.log(Object.keys(persona));
console.log("objetc values");
// con Object.values obtendremos ahora si los valores o por asi decir el contenido del objeto-parte izquierda
console.log(Object.values(persona));

console.log("objetc entries");
// con Object entries nos retornara en un arreglo ,varios arreglos tanto la parte de variables como su valor
console.log(Object.entries(persona));