//object literal
const persona = {
    
    nombre:"jose",
    
    apellido:"diaz",
    disponible:true,
};


// podemos automatizar la creacion de objetos


// object constructor

function producto(nombre,apellido)
{
//    el nombre que nosotros le pasemos lo guardara en this.nombre 
   this.nombre=nombre;
    this.apellido=apellido;
    
}


const producto2= new producto("carlos","diaz");

console.log(producto2);