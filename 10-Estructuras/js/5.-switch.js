// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

const metodoPago = 'efectivo';
// switch(condicion)
switch(metodoPago) {
    // case son las opciones a evaluar y colocamos : para que en caso de cumplir el caso se ejecute el codigo
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        // necesitamos un break para poder terminar con el bloque del case en caso de no tenerlo realizara todo el codigo siguiente hasta encontrar un break o terminar el switch
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aún no has pagado');
        break;
}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if