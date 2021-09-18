//variabkles que nos serviran a lo largo del curso
const btnEnviar=document.querySelector('#enviar');

// es recoemndado hacer una funcion donde ejecutemos todos lo addEventListeners

// variables para campos
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('#enviar-mail');
const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

eventListeners();


function eventListeners()
{
    // cuando la app arranca
    document.addEventListener('DOMContentLed',iniciarApp);

    // campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    // enviar el email
    formulario.addEventListener('submit',enviarEmail);
}





// funciones

function iniciarApp()
{
    // desabilitamos el boton de enviar
    btnEnviar.disabled=true;
    // agregamos  algunas clases con tailwind
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

// validar el formualrio
function validarFormulario(e)
{

    // como saber si en el campo del formulario hay algunos carecteres
    if(e.target.value.length>0)
    {
        // eliminar el mensaje de error 

        const error=document.querySelector('p.error');
        if(error)
        {
            error.remove();
        }
        e.target.classList.remove('border-red-500');
        e.target.classList.add('border','border-green-500');
    }
    else
    {
        e.target.classList.remove('border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError("todos los campos son obligatorios");
    }



    // ---------------------------------------
    // valdiacion para el email

    if(e.target.type==='email')
    {

    
    
        // // -1 significa que no lo encontro
        // const resultado=e.target.value.indexOf('@');
        if(er.test(e.target.value))
        {
            const error=document.querySelector('p.error');
            if(error)
            {
                error.remove();
            }
        e.target.classList.remove('border-red-500');
        e.target.classList.add('border','border-green-500');
        }
        else
        {
            e.target.classList.remove('border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError("todos los campos son obligatorios");
        mostrarError("email no valido");
        }
    }

    if(er.test(email.value) && asunto.value!=='' && mensaje.value!=='')
    {
       btnEnviar.disabled=false;
       btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }
    









}

function mostrarError(mensaje)
{
    const mensajeError=document.createElement('P');
    mensajeError.textContent=mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');

    const errores=document.querySelectorAll('.error');

    if(errores.length===0)
    {
        formulario.appendChild(mensajeError);
    }

}

// enviar el email
function enviarEmail(e)
{
    e.preventDefault();
    //mostrar el spinner
    const spinner=document.querySelector('#spinner');
    spinner.style.display='flex';

    // despues de 3s ocualtar el spinner
    // setTimeout lo hace solo una vez
    //setinterval lo ejecuta cada cierto intervalo
    setTimeout(()=>
    {
        spinner.style.display='none';
        // mensaje que se envio correctamente
        const parrafo=document.createElement('p');
        parrafo.textContent="el correo se envio correctamente";
        parrafo.classList.add('border','border-green-500','background-green-100','text-black-500','p-3','mt-5','mb-5','text-center','error');
        // inserta el parrafor antes del spinner
        formulario.insertBefore(parrafo,spinner);
    },3000);



}