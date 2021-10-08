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

    // propiedades estaticas
    static bienvenida()
    {
        return `bienvenido al cajero`;
    }

}


// herencia

// empresa es una clase hijo de Cliente
class Empresa extends Cliente
{
    constructor(nombre,saldo,telefono,categoria)
    {
        // ese super va  ala clase padre y busca a la clase padre para ir a buscarlos
        super(nombre,saldo);
        this.telefono=telefono;
        this.categoria=categoria;
    }
    static bienvenida()
    {
        return `bienvenido al cajero de empresas`;
    }

}

const jose=new Cliente("jose",400);
console.log(jose);


const empresa=new Empresa("teopis",1231,999,"aprendizaje en linea");
console.log(empresa.mostrarInformacion());