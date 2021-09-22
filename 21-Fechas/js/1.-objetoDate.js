// como funcionan las fechas en js y todo esta informacion recide dentro de  un objeto llamado date

// podemos madnarle una fecha con el formato de estados unidos  mes-dia-año
// const diaHoy=new Date("3-12-1999");
// const diaHoy=new Date("march 12 1999");
const diaHoy=new Date();
let valor=diaHoy;

// getFullYear() nos trae el año

valor=diaHoy.getFullYear();

// getMonth() nos retorna el mes"importante empieza desde 0"
valor=diaHoy.getMonth();

// getMinutes nos retorma los minutos
valor=diaHoy.getMinutes();


// getSeconds() nos retorma los minutos
valor=diaHoy.getSeconds();

// nos retorna los milisegundos  que han pasado desde 1970
valor=diaHoy.getTime();


// get sirve para  obtener el valor 

// set nos srive para colocar el año


console.log(valor);

