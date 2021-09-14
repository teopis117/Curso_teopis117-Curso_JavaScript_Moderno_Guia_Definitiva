
const nombre="hola";

const persona = {
    
    nombre:"jose",
    
    apellido:"diaz",
    disponible:true,
    mostrarinfo:function()
    {
        console.log(`el producto${nombre}`);
        console.log(`el producto${this.nombre}`);
    }
};

persona.mostrarinfo();