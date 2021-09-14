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

// aplicando destructuring a objetos anidados

const {nombre}=producto;
console.log(nombre);


// estamos accediendo y creando la  variable de medida
const {informacion: {medida} }=producto;

console.log(medida);
// creamos la variable  de pais
const {informacion: {medidas:{pais}} }=producto;
console.log(pais);