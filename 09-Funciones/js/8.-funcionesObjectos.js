
// los metodos en objetos son llamados metodos de propiedad

const reproductor={
    reproducir: function(id)
    {
        console.log("reproduciendo cancion con el id "+id);
    },
    pausar:function()
    {
        console.log("pausando....")
    },
    crearPlaylist:function(nombre)
    {
        console.log(`creando la musica de ${nombre}`);
    },
    reproducirPlay:function(nombre)
    {
        console.log(`reproducir la cancion de ${nombre}`);
    }
}

reproductor.borrar=function(id)
{
    console.log("borrando cancion..."+id);
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("pop");
reproductor.reproducirPlay("pop");