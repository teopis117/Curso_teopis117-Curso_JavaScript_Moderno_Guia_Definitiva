// eliminar elementos del localStorage removeItem();
localStorage.removeItem('nombre');

// creamos el elemento
const meses=["enero","febrero","marzo"];
// recordemos que debemos de pasarle un string
const mesesString=JSON.stringify(meses);
// agregamos el elemento al local
localStorage.setItem('meses',mesesString);





// actualizar una registro
const mesesArray=JSON.parse(localStorage.getItem('meses'));

console.log(mesesArray);

mesesArray.push('nuevo mes');

console.log(mesesArray);
// no hay una manera de actualizar el valor ya que debemos reescribir el elemento

localStorage.setItem('meses',JSON.stringify(mesesArray));


// eliminar todo lo que tenga el localStorage

localStorage.clear();