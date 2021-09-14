const producto=
{
nombre:"monitor de 20",
precio:300,
disponible:true,
    informacion:
    {
        peso:"1kg",
        medida:"1m",
        medidas:{
            fabricacion:"madera",
            pais:"mexico",
        }
    }

}

console.log(producto);

console.log(producto.informacion.peso);
console.log(producto.informacion.medidas.pais);