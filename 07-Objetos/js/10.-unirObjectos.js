const persona = {
    
    nombre:"jose",
    
    apellido:"diaz",
    disponible:true,
};


const medidas =
{
    peso:"2kg",
    medida:"120cm",
}

const objeto1=
{
    colonia:"centro",
}
const objeto3=
{
    autor:"quien sabe",
}

console.log(persona);
console.log(medidas);

// para unir dos objetos podemos hacer lo siguiente

const resultado=Object.assign(persona,medidas,objeto1);

console.log(resultado);

// spread operator o rest operator

const resultado2={...persona,...medidas,...objeto3};
console.log(resultado2);