class Cliente
{
    #nombre;
    setNombre(nombre)
    {
        this.#nombre=nombre;
    }
    getNombre()
    {
        this.#nombre=nombre;
    }

}

const jose=new Cliente();
jose.setNombre("pepe");
console.log(jose.getNombre());



// publico dentro de la clase o objeto
// private solo desde el objeto


