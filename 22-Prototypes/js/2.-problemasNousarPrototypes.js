function Cliente(nombre,saldo)
{
    this.nombre=nombre;
    this.saldo=saldo;
}

const juanito = new Cliente('jose',900);



function formatearCliente(cliente)
{
    const {nombre,saldo}=cliente;
    return `el cliente tiene ${nombre} tiene:${saldo} de saldo`;
}

console.log(formatearCliente(juanito));

function Empresa(nombre,saldo,categoria)
{
    this.nombre=nombre;
    this.saldo=saldo;
    this.categoria=categoria;
}


const udemy=new Empresa("udemy",5000,"cursos");

// cada vez que querramos adaptar una funcion a nuevos objetos deberemos de crearlos 

function formatearEmpresa(empresa)
{
    const {nombre,saldo,categoria}=empresa;
    return `la empresa:${nombre} tiene un saldo:${saldo} en la categoria de ${categoria}`;
}

console.log(formatearEmpresa(udemy));