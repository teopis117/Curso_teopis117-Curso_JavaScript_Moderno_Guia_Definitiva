const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto','Septiembre'];

// .concat
// el orden en el cual le pasemos los arreglos es como colocara los elementos
const meses3=meses.concat(meses2,"otro mes");
console.log(meses3);


// spread operator

const resultado=[...meses,...meses2,"otro mes"];

console.log(resultado);