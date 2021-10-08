// POO programacion orientada a objetos con clases


// hay dos formas de crear clases con js
// class declaration
class Cliente
{
        // le pasamos los valores al ser intanciado
constructor (nombre,saldo) 
{
    this.nombre=nombre;
    this.saldo=saldo;
}
}

const jose=new Cliente("jose",400);
console.log(jose);


// class expression
const Cliente2=class{

}