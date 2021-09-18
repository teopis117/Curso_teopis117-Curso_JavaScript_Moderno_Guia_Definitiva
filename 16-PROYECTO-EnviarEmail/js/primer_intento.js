//variables
const btnEnviar=document.querySelector("#enviar");
const er= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errores=document.querySelectorAll('.error');
// variables para los campos
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('#enviar-mail');


// cargar los addEventListeners 
eventListeners();
function eventListeners()
{
    // ejecutar esta funcion cuando la app Arranca
     document.addEventListener('DOMContentLoaded',iniciarApp);
      //campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}



//funciones

function iniciarApp()
{
//  de esta manera hacemos que un boton no este disponible o no pueda ser precionado  
btnEnviar.disabled=true;
btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}


function validarFormulario(e){
    
    // con esto podemos saber lo que el usuario esta escribiendo
    if(e.target.value.length > 0)
    {
        
        
        e.target.classList.add('border','border-green-500');
        // elimina los errroes
        const error=document.querySelector("p.error");
        error.remove();
    }
    else
    {
        
        
        e.target.classList.remove('border-green-500');
        // de esta manera podemos agregar dos clases
        e.target.classList.add('error', 'border-red-500');
        mostarError("todos los campos son obligatorios");
    }

    if(e.target.type === 'email')
    {
        // console.log("es un email hay que validarlo diferente");
        


        // si el indexof nos retorna un -1 significad que  no encontro el caracterer que buscamos y si lo encontramos nos mostrara en que parte lo encontro
        // const resultado=e.target.value.indexOf('@');

        // una expresion regular es buscar un patron  y esperar que se cumpla
        if(er.test(e.target.value))
        {

            const error=document.querySelector('p.error');
        if(error)
        {
            error.remove();
        }
          
        }
        else
        {
            
            e.target.classList.remove('border-green-500');
        // de esta manera podemos agregar dos clases
        e.target.classList.add('error', 'border-red-500');
        mostarError("todos los campos son obligatorios");
        }
    }

    if(email.value !== '' && asunto.value !== '' &&mensaje.value!=='')
    {
        console.log("pasaste la validacion");
    }
}

function mostarError(mensaje)
{
    // crearemos un parrafo
    const mensajeError=document.createElement('p');
    mensajeError.textContent=mensaje;
    console.log("hay un error");
    // clases de tailwind
    mensajeError.classList.add('border','border-red-500','background-red-100',"text-red-500",'p-3','mt-5','text-center','error');
    
    // con querySelectorAll si tenemos acceso al metodo de length 
    //con queryselectorall nos retorna una coleccion de elementos  para saber si hay existen
    // de esta manera solo se mostrara una vez el mensaje de error
    if(errores.length>=0)
    {
        formulario.appendChild(mensajeError); 
        // agregar al html
        // de esta manera le agregamos al selector formulario la variable de mensajeError
        console.log(mensajeError);
        
    }
    
    
}