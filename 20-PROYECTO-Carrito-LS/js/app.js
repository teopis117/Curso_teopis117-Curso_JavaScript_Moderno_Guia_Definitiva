//variables

const carrito=document.querySelector('#carrito');
// la mayoria de selectores usualmente son const apesar de que no se puede reasignar


const contenedorCarrito=document.querySelector('#lista-carrito tbody');

const limpiarCarritoBtn=document.querySelector('#vaciar-carrito');

const listaCursos=document.querySelector('#lista-cursos');

// un arreglo vacio para llenar conforme demos clicks
let articulosCarrito=[];


// crear una function donde cargamos todos los addEventListener
cargarEventListener();

function cargarEventListener()
{
    // cuando agregas un curso presionando "agregar al carrito"
  
    // js ya sabe que el segundo valor de un addEventListener sera una funcion asi que no hay caso de agregarle parentesis
    listaCursos.addEventListener('click',agregarCurso);
  
    // eliminar cursos del carrito
    carrito.addEventListener('click',eliminarCurso)
   
//    muestra los cursos del localStorage
    document.addEventListener('DOMContentLoaded',()=>
    {
        articulosCarrito=JSON.parse(localStorage.getItem('carrito'))||[];
        carritoHtml();
    })


    limpiarCarritoBtn.addEventListener('click',()=>
    {
        // reseteamos el arreglo
        articulosCarrito=[];
        limpiarHtml();//eliminamos todo el html que este en el carrito 
    })
}


// funciones

function agregarCurso(e)
{
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito"))

    {
        // para llegar al curso que queremos podemos hacer varias veces parentElement
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);

    }
}

// eliminar un curso del carrito
function eliminarCurso(e)
{
console.log(e.target.classList);
if(e.target.classList.contains("borrar-curso"))
{
    const cursoId=e.target.getAttribute('data-id');
    
    // como eliminar del arreglo de articulosCarrito por el data-id
    
    // con filter nos retornara todos los articulos que cumplan con la condicion , en este caso sera la que no sea igual al id del que tenemos 
    articulosCarrito=articulosCarrito.filter((curso)=>
    {
        return curso.id!==cursoId;
    })
    
    carritoHtml(); //iterar sobre el carrito y mostrar el html

}
}


// por lo general debemos dividir el programa

// lee el contenido del html  al que le dimos click y extraer la informacion

function leerDatosCurso(cursoSeleccionado)
{
    

    //crear un objeto con el contenido del curso actual

    const infoCurso={
        // de estas maneras podemos ir accediendo  a los elementos
        imagen:cursoSeleccionado.querySelector('img').src,
        titulo:cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        // getAttribute nos sirve para obetener el contenido de un atributo de un elemento
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }
// revisa si un elemento ya existe en el carrito
const existe=articulosCarrito.some((curso)=>
{
    return curso.id===infoCurso.id;
})
    // si el curso ya esta en la lita ejecutaremos este if
    if(existe)
    {
        //actualizamos la cantidad
        const cursos=articulosCarrito.map((curso)=>
        {
            if(curso.id===infoCurso.id)
            {
                curso.cantidad+=1;
                return curso;//retorna el objeto actualizado
            }
            else
            {
                return curso;
            }
        });
        articulosCarrito=[...cursos];
    }
    // y si no esta agregamos el curso al carrito
    else{
        articulosCarrito=[...articulosCarrito,infoCurso];
    }




    
    

    carritoHtml();

}


// muestra el carrito de compras en el html

function carritoHtml()
{

    // limpiar el html
    limpiarHtml();
    // recorre el carrito y genera el html

    articulosCarrito.forEach((curso)=>
    {
        // cada vez que nuestro codigo funcione intentemos mejorarlo
        // aplicando destructuring
        const {imagen,titulo,precio,cantidad}=curso;
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>
        
        <img src="${imagen}" width=100>
        </td>
        
        <td>
        
        ${titulo}  
        
        </td>
        <td>
        
        ${precio}  
        
        </td>
        <td>
        
        ${cantidad}  
        
        </td>
        <td>
       <a href="#" class="borrar-curso" data-id="${curso.id}">  X </a> 
        
        </td>

        `
        ;
        // agregar al html cada objeto que agregamos
        contenedorCarrito.appendChild(row); 
    
    
    });
    //agregar el carrito de compas al storage

    sincronizarStorage();



}

function sincronizarStorage()
{
    // stringify hace que lo pasa  de manera de string
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
}


// eliminar los cursos del tbody

    function limpiarHtml()
    {
        // forma lenta de eleminar html
// contenedorCarrito.innerHTML="";
        while(contenedorCarrito.firstChild)
        {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }
    }


    