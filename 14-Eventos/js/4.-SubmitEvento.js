// eventos del formulario

const formulario=document.querySelector('#formulario');

// submit cuando le damos enviar al formulario
// preventDefault nos sirve para prevenir la accion que haria el formulario osea evitar que haga la accion
//detiene la accion
formulario.addEventListener('submit',validarFormulario);



function validarFormulario(e)
{
    e.preventDefault();
    console.log(e.target.method);  
}