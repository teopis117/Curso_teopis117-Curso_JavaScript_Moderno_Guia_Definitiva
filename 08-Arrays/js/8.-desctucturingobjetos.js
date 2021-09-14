const meses=['enero','febrero','marzo','abril'];
const producto={
    nombre:"monitor de 20 pulgadas",
    precio:300,
}
// en arreglos tambien existen el destructuring


const numeros=[10,20,30,40,50];
// en el caso de los arreglos nosotros definimos el nombre de las variables a crear
// y conforme avanzamos nos iran asigandno su valor
// const [primero,segundo,tercero]=numeros;

// acceder al tercer valor sin crear variables que no necesitamos
const [,,tercero]=numeros;
const [,,,,quinto]=numeros;

// extramos el primer valor y creamos un arreglo con los demas variables de los elementos que quedan
const [primero, ...tercero]=numeros;


