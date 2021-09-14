const producto="Monitor 20 pulgadas";

// .repeate nos permite repetir una cadena de texto
// si le pasamos un valor decimal a repeat este se redondeara
const texto= 'en promocion'.repeat(3);


console.log(texto);

console.log(`${producto} ${texto}!!!`);


// ------------------------------------------
// Split ,dividir una string

const actividad="estoy aprendiendo javascript";
// separando palabras  que contengan un espacio entre ellas
console.log(actividad.split(" "));

// separando las palabras que contengan una coma entre ellas
const hobbies="leer,cantar,escuchar,musica,correr";
console.log(hobbies.split(","));

const tweet =" aprendiendo js moderno #jsmordernoconjuan";

console.log(tweet.split("#"));