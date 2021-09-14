const cardDiv=document.querySelector('.card'); 

cardDiv.addEventListener('click',(e)=>
{
    // con esto sabemos a que clases interactuamos
// e.target.classList
    if(e.target.classList.contains('card'))
    {
        console.log("diste click en el card")
        
    }
    if(e.target.classList.contains('precio'))
    {
        console.log("diste click en precio")

    }
    if(e.target.classList.contains('titulo'))
    {
        console.log("diste click en titulo")
    }



});

