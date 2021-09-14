const autenticado=true;
// recordemos que (autenticado===True) es lo mismo que poner la condicion si el igual a
// if(autenticado===true)
if(autenticado)
{
    console.log("el usuario esta autenticado")
}

const puntaje=5000;
// en  la vida real por lo general podemos encontrar en ves de tener if y else if ahora solo encontramos if e if

function revisarPuntaje()
{
    if(puntaje>450)
    {
        console.log("buen puntaje");
        // utilizamos el return para que cuando llegue hasta esa parte termine el condicional y salga de la funcion y no ejecute todo el codigo
        return;
    }    

    if(puntaje>300)
    {
        console.log("excelente");
        // solo podemos utilizar el return si estamos en una funcion
        return;
        
    }    
}


revisarPuntaje();