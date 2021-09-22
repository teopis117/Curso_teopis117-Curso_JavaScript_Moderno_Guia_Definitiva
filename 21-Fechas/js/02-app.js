// moment js

// con esto colocara la fecha  local del ordenador
// new Date().toLocaleDateString();

const diaHoy=new Date();

moment.locale('es');

// importando las librerias de moment y local podemos utilizar diferntes metodos

console.log(moment().format('LLLL'));