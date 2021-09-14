// supongamos que tenemos un elementos de 100 y mostraremos en pantalla los multiplos de 3 la palabra fizz y los de 5 buzz y los de 3 y 5 fiizz buzz
for(i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log(`${i}.-fizzbuzz`);
        continue;
    }
    if(i%3==0)
    {
        console.log(i+".-fizz");
    }
    if(i%5==0)
    {
        console.log(i+".-buzz");
    }
    console.log(i);
}
