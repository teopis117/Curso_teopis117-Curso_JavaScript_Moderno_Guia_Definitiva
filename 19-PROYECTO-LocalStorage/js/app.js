//variables
const formulario=document.querySelector('#formulario');
const listaTweets=document.querySelector('#lista-tweets');
let tweets=[];



//event listeners
eventlisteners();

function eventlisteners()
{

    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);

    // cuando el docuemtno esta listo

    document.addEventListener('DOMContentLoaded',()=>
    {
        tweets=JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });

}



//funciones

function agregarTweet(e)
{
    e.preventDefault();
    //textarea donde el usuario escribre
    // de esta manera obtenemos el  contenido que tenga adentro del textarea cuando el usuario le da enviar
    const tweet=document.querySelector('#tweet').value;
    // validacion

    if(tweet==='')
    {
        mostrarError("un mensaje no puede ir vacio");
        return;//evita que se ejecuten mas lineas de codigo 
    }
    
    const tweetObj=
    {
        id:Date.now(),
        tweet,
    }

    
    //añadir al arreglod e tweets
    
    tweets=[...tweets,tweetObj];
    
    // una vez agregadocreamos el html
    crearHTML();
    
    // reinicar el formulario
    formulario.reset();


}


// mostrar mensaje de error
function mostrarError(error)
{
const mensajeError=document.createElement('p');
mensajeError.textContent=error;
mensajeError.classList.add('error');

// insertar en el contenido
const contenido=document.querySelector('#contenido');
contenido.appendChild(mensajeError);

// elimina la alerta despues de 3 segundos
setTimeout(()=>
{
mensajeError.remove();
},3000);

}

// mostrar un listado de los tweets

function crearHTML()
{
    
    limparHTML();
    if(tweets.length>0)
    {
        tweets.forEach((tweet)=>
        {
            // crear el html
            const li=document.createElement('li');
            // crear un boton para eliminar 
            const btnEliminar=document.createElement('a');

            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML="X";

            // Anadir la funcion de eliminar

            btnEliminar.onclick=()=>
            {
                borrarTweet(tweet.id);
            }
            
            
            li.innerHTML=tweet.tweet;
            
            // insertar en el html 
            listaTweets.appendChild(li);
            
            // asignar el boton

            li.appendChild(btnEliminar);

        })
    }

    sincronizarStorage();


}
// agrega los tweets actuales al storage
 function sincronizarStorage()
 {

    localStorage.setItem('tweets',JSON.stringify(tweets));


 }

//  elimina un tweet
function borrarTweet(id)
{
        // utilizaremos filter para crear el nuevo arreglo y asignarlo

        tweets=tweets.filter((tweet)=>
        {
            return tweet.id!=id;
        })
        
        crearHTML();

}


// limpiar html

function limparHTML()
{
    while(listaTweets.firstChild)
    {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}