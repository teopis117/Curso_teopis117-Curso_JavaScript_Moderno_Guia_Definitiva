const busqueda=document.querySelector('.busqueda');
// keydowm=cuando estamos escribiendo 
//keyuo= cuando escribimos pero soltamos la tecla
//blur=cuando entramos al input
//copy=copiar el contenido crtl+c
//paste=pegar crtl+c
//cut=cortar el contenido crtl+x
//input= todos los demas eventos menos el blur

// como saber lo que esta escribiendo el usuario
// eventoQueSucede.target.value nos sirve para saber todo el contenido del input 

busqueda.addEventListener('keydown',(eventoQueSucede)=>
{
// como saber si hay algo en el input
if(eventoQueSucede.target.value==='')
{
    console.log("no hay nada");
}

   
}
)


