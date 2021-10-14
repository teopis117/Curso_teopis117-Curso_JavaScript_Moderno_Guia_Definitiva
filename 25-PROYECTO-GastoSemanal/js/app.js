//variables y selectores
let presupuesto;
const formulario=document.querySelector('#agregar-gasto');
const gastoListado=document.querySelector('#gastos ul');






//eventos
eventListeners();
function eventListeners()
{
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto);
    formulario.addEventListener('submit',agregargasto)
    
}



// clases

class Presupuesto
{
    constructor(presupuesto)
    {
        this.presupuesto=Number(presupuesto);
        this.restante=Number(presupuesto);
        this.gastos=[];
    }

    nuevoGasto(gasto)
    {
        // con this. hacemos referencia a otros elementos dentro del mismo objeto
    this.gastos=[...this.gastos,gasto];  
        this.calcularRestante();
    console.log(this.gastos);
    }

    calcularRestante()
    {
        // reduce nos sirve para acumular los valores
        const gastado=this.gastos.reduce((total,gasto)=> total +gasto.cantidad,0);
        this.restante=this.presupuesto-gastado;
        console.log(this.restante);
    }

        eliminarGasto(id)
        {
            this.gastos=this.gastos.filter(gasto =>gasto.id !==id);
            console.log(this.gastos);
        }
    

}

class UI
{

    insertarPresupuesto(cantidad)
{
    const {presupuesto,restante}=cantidad;
    document.querySelector('#total').textContent=presupuesto;
    document.querySelector('#restante').textContent=restante;
    }
    imprimirAlerta(mensaje,tipo)
    {
        // crear el div
        const divMensaje=document.createElement('div');
        divMensaje.classList.add('text-center','alert');
        if(tipo==='error')
        {
            divMensaje.classList.add('alert-danger');
        }
        else
        {
            divMensaje.classList.add('alert-success');

        }

        // mensaje del error

        divMensaje.textContent=mensaje;
        // insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje,formulario);

        // quitarl el html
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }
    agregarGastoListado(gastos)
    {
        // elimina el html previo
        this.limpiarHtml();
        
        // iterar sobre los gastos

            gastos.forEach((gasto)=>
            {
                const {cantidad,nombre,id}=gasto;

                //crear un li
                const nuevoGasto=document.createElement('li');
                // classname solamente nos reporta las clases que hay
                nuevoGasto.className='list-group-item d-flex justify-content-between align-items-center'

                // nuevoGasto.setAttribute('data-id',id);
                    nuevoGasto.dataset.id=id;

                console.log(nuevoGasto);
                // agregar el html del gasto
                nuevoGasto.innerHTML=`${nombre}<span class="badge badge-primary badge-pill">$${cantidad}</span>`;


                // boton para borrar
                
                const btnBorrar=document.createElement('button');
                btnBorrar.innerHTML='Borrar &times';
                btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
                btnBorrar.onclick=()=>
                {
                   eliminarGasto(id);
                };

                nuevoGasto.appendChild(btnBorrar);


                // agregar al html

                gastoListado.appendChild(nuevoGasto);

            })

            
        }
        
        limpiarHtml()
        {
            while(gastoListado.firstChild)
            {
                gastoListado.removeChild(gastoListado.firstChild)
            }
        }
        actualizarRestante(restante)
        {
            document.querySelector('#restante').textContent=restante;
        }


        comprobarPresupuesto(presupuestoobj)
        {
            const {presupuesto,restante}=presupuestoobj;
            const restanteDiv=document.querySelector('.restante');


            // comprobar 25%

            if((presupuesto / 4)>restante)
            {
                restanteDiv.classList.remove("alert-success","alert-warning");
                restanteDiv.classList.add("alert-danger");
            }
           else  if((presupuesto / 2)>restante)
            {
                restanteDiv.classList.remove("alert-danger");
                restanteDiv.classList.add("alert-warning");
            }
            // si el total es menor a 0

            if(restante<=0)
        {
            ui.imprimirAlerta("el presupuesto se ha terminado","error");
            formulario.querySelector('button[type="submit"]').disabled=true;
        }
    

        
        }


}


//intanciar
const ui=new UI();

// funciones



function preguntarPresupuesto()
{
    const presupuestoUsuario=prompt("¿cual es tu presupuesto");
    // console.log(Number(presupuestoUsuario));

    // isNaN es una funcion que nos permite saber si el el parametro a evaluar no es un numero
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario ||presupuestoUsuario<=0)){
        // con esto hacemos que la pagina se recargue
        window.location.reload();
    }

    // presupuesto valido
    presupuesto= new Presupuesto(presupuestoUsuario);
     console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

//añadir gasto
function agregargasto(e)
{
e.preventDefault();

//leer los datos del formulario
// el value nos reportara el valor del input
const nombre=document.querySelector('#gasto').value;
const cantidad=Number(document.querySelector('#cantidad').value);


    // validar
    if(nombre ===''|| cantidad==='')
    {
        ui.imprimirAlerta('Ambos campos son Obligatorios','error');
        return;
    }
    else if(cantidad <=0 || isNaN(cantidad))
    {
        ui.imprimirAlerta('cantidad no valida','error');
        return;
    }


    console.log("agregando gasto.-..");


    //generar un objeto con el gasto
    // esto es lo inverso a destructuring,creamos un objeto con estas propiedades
    const gasto={nombre,cantidad,id:Date.now()};


    // añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);


 //imprimir los gastos
 const {gastos,restante}=presupuesto;
ui.agregarGastoListado(gastos);

ui.actualizarRestante(restante);



    // mensaje de agregado correctamente
    ui.imprimirAlerta('Gasto agregado correctamente');
    ui.comprobarPresupuesto(presupuesto);
    // reiniciar formulario
    formulario.reset();
}

function eliminarGasto(id)
{
    presupuesto.eliminarGasto(id);
    const {gastos}=presupuesto;
    ui.gast
}