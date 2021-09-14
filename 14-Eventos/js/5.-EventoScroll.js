// eventos con el scroll

// scroll detectar el scroll a la pantalla
// window.scrollX variable donde se almacena el scroll en X
// window.scrollY variable donde se almacena el scroll en y

window.addEventListener('scroll',()=>
{
    const premium=document.querySelector('.premium');

    // getBoundingClientRect nos sirve para poder saber a que distancia estamos del elemento que queremos ver
    const ubicacion=premium.getBoundingClientRect();
    // console.log(ubicacion);
    if(ubicacion.top <784)
    {
        console.log("el elemento ya esta visible");
    }
    else
    {
        console.log("aun no estamos por ahi");
    }
})