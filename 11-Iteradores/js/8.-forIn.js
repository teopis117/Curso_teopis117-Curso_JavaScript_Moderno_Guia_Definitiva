const pendientes=["tarea","proyecto","estudiar js"];

//  for in nos recorre un objeto

let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}
// una forma de utilizarlo con ecmascript7

for(let iterador in automovil)
{
    console.log(`${automovil[iterador]}`);
}
for(let [propiedad,valor] of Object.entries(automovil))
  {
    //   console.log(propiedad);
    //   console.log(valor);
  }
