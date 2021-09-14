// es recomendable que las funciones esten contenidas en pequeñas partes

iniciarApp();
function iniciarApp()
{
    console.log("iniciando App");

    segundaFuncion();
}

function segundaFuncion()
{
    console.log('desde la segunda funcion');
    usuarioAuntenticado('JOSE');
}

function usuarioAuntenticado(usuario)
{
    console.log("auntenticando usuario... espere");
    console.log(`${usuario} inicas sesion`);
}