//constructores


function Seguro(marca,year,tipo)
{

    this.marca=marca;
    this.year=year;
    this.tipo=tipo;
}

// realiza la cotizacion con los datos

Seguro.prototype.cotizarSeguro=function()
{
    let base=2000,cantidad;
    /**opcion 1 =americano 1.15
     * opcion 2= asiatico 1.05
     * opcion 3=europeo 1.35
     */
    console.log(this.marca);
    switch(this.marca)
    {
        case '1':
        cantidad=base*1.15;    
        ;break;
        case '2':
            cantidad=base*1.05;;break;
        case '3':
            cantidad=base*1.35;;break;
        default:
            
        ;break;

    }
    //leer el año
    const diferencia=new Date().getFullYear()-this.year;


    //cada año que la diferencia es mayor,el costo va a reducir un 3%

cantidad-=((diferencia*3)*cantidad)/100;
    

if(this.tipo==='basico')
{
    cantidad*=1.30;
}
else
{
    cantidad*=1.50;
}
return cantidad;
}



function UI()
{

}

// llena las opciones de los años
UI.prototype.llenarOpciones=()=>
{
    const max=new Date().getFullYear(),
          min=max-20;
          const selectYear=document.querySelector('#year');

          for(let i=max;i>min;i--)
          {
              let option=document.createElement('option');
              option.value=i;
              option.textContent=i;
              selectYear.appendChild(option);
          }

}

// mostrar alertas en pantalla
// recordemos que is no accedemos a ninguna propiedad por el elemento this podemos utilizar un arrow function
UI.prototype.mostrarMensaje=(mensaje,tipo)=>
{
const div=document.createElement('div');
if(tipo=='error')
{
    div.classList.add('error');
}
else
{
    div.classList.add('correcto');
    
}
div.classList.add('mensaje','mt-10');
div.textContent=mensaje;
// insertar en el html
const formulario=document.querySelector('#cotizar-seguro');
// insertBefore(nuevoNodo,nodoReferencia),
formulario.insertBefore(div,document.querySelector('#resultado'));

// limpar con un settimeout
setTimeout(()=>
{
div.remove();
},3000);



}
UI.prototype.mostrarResultado=(seguro,total)=>
{

}




// intanciar UI

const ui=new UI();





document.addEventListener('DOMContentLoaded',()=>
{
ui.llenarOpciones();//llena el selecto con los años
});

EventListeners();
function EventListeners()
{
    const formulario=document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);
    formulario.reset();
}



function cotizarSeguro(e)
{

    e.preventDefault();
    // leer la marca seleccionada
    const marca=document.querySelector('#marca').value;
    
    // leer el año seleccionado
    const year=document.querySelector('#year').value;
      
    
    
    
    // leer el tipo de cobertura
    // como leer los radio buttons
    const tipo=document.querySelector('input[name="tipo"]:checked').value;
     
    


    console.log("cotizando");
    if(marca===''||year===''||tipo==='')
    {
        ui.mostrarMensaje("Todos los campos son obligatorios","error");
        return;
    }
    else
    {
        ui.mostrarMensaje("Cotizando....","correcto");
    }

    
    //instanciar el seguro
    const seguro=new Seguro(marca,year,tipo);
    const toatal=seguro.cotizarSeguro();
     
    

    // utilizar el prototype que va  a cotizar

    


}