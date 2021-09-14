// event bubling 

const cardDiv=document.querySelector('.card');
const infoDiv=document.querySelector('.info');
const titulo=document.querySelector('.titulo');

// stopPropagation con esto detenemos varios eventos que se propagan
cardDiv.addEventListener('click',(e)=>
{
    // detiene la propagacion del evento
    e.stopPropagation();
    console.log("click en card")
})

infoDiv.addEventListener('click',(e)=>
{
    e.stopPropagation();
    console.log("click en info")
})

titulo.addEventListener('click',(e)=>
{
    e.stopPropagation();
    console.log("click en titulo")
})