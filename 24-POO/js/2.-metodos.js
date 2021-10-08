class Cliente
{
        // le pasamos los valores al ser intanciado
constructor (nombre,saldo) 
{
    this.nombre=nombre;
    this.saldo=saldo;
}
    mostrarInformacion()
    {
        return `Cliente:${this.nombre} tu saldo es de ${this.saldo}`;
    }

    // propiedades estaticas: para mostrarlas no necesitan instancias
    static bienvenida()
    {
        return `bienvenido al cajero`;
    }

}


const jose=new Cliente("jose",400);
console.log(jose);
// accedemos a la propiedada de un objeto con .
console.log(jose.mostrarInformacion());

// las propiedades estaticas pertenecen a la clase y no al objeto
console.log(Cliente.bienvenida());
