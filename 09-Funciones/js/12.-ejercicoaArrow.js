const reproductor={
    reproducir: (id) =>
    {
        console.log("reproduciendo cancion con el id "+id);
    },
    pausar:()=>
    {
        console.log("pausando....")
    },
    crearPlaylist:(nombre)=>
    {
        console.log(`creando la musica de ${nombre}`);
    },
    reproducirPlay:(nombre)=>
    {
        console.log(`reproducir la cancion de ${nombre}`);
    }
}

reproductor.borrar=(id)=>
{
    console.log("borrando cancion..."+id);
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("pop");
reproductor.reproducirPlay("pop");