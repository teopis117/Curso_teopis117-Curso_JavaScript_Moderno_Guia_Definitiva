const nav=document.querySelector('.navegacion');

// registrar un evento
// click =es cuando demos click
//mosueenter =  cuuando el raton entrapor el elemento
//mouseout=cuuando el raton sale por el elemento
// dblclick darle doble click
nav.addEventListener('mouseout',()=>
{
    console.log("entrando a la navegacion"); 
    nav.style.backgroundColor="red";
})
nav.addEventListener('mouseout',()=>
{
    console.log("saliendo de la navegacion"); 
    nav.style.backgroundColor="green";
})