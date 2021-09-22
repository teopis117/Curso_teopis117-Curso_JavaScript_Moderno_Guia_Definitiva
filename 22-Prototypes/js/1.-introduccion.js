// los prototipos estan muy relacionados con prototipos
// todos los objetos cuentan con una propiedad llamada proto

// Object literal
const cliente={
    nombre:"jose",
    dinero:233,
}

// contructor del objeto
// nos permite crear objetos dinamicos y reutilizables
function Cliente(nombre,saldo)
{
    this.nombre=nombre;
    this.saldo=saldo;
}

const juanito = new Cliente('jose',900);

console.log(juanito);

