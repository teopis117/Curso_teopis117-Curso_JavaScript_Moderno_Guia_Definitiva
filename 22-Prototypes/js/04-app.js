function Cliente(nombre,saldo)
{
    this.nombre=nombre;
    this.saldo=saldo;
}


Cliente.prototype.tipoCliente=function()
{
    // el prototype sigue haciendo referencia al obejto actual
    if(this.saldo>10000)
    {
        tipo='gold';
    }
    else if(this.saldo>20000)
    {
        tipo="platino";
    }
    return tipo;
}


Cliente.prototype.nombreClienteSaldo=function()
{
    return `${this.nombre},${this.saldo},${this.tipoCliente()}`;
}


Cliente.prototype.retirarSaldo=function(retira)
{
    this.saldo-=retira;
}


// instanciarlo

const pedro=new Cliente("pedro",23230);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(231000);
console.log(pedro.nombreClienteSaldo());



console.log(pedro);


// diferencia entre arrow funct y function 
// function busca en el objeto
// arrowfunction busca en el scope global y nos retornara un undefined
// ---------------------------------------------------



function Persona(nombre,saldo,telefono)
{
    // heredamos el contructor de cliente
    Cliente.call(this,nombre,saldo);

    this.telefono=telefono;
}

// clonar los prototypes antes de crear un objeto

//  heredar prototype
Persona.prototype=Object.create(Cliente.prototype);

// con esto asignamos el contructor que se sobreescribio con la nuestra
Persona.prototype.constructor=Cliente;


// instanciar persona
const juan=new Persona("juan",123,5555555);


console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono=function()
{
    return `${this.telefono}`;
}

console.log(juan.mostrarTelefono());