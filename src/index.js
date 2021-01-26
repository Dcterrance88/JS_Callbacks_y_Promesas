import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.warn);

/*
promise.race : nos permite ejecutar un conjunto de promesas y obtener la respuesta de
la promesa que se resuelve mas rapido

cuando se presenta un error en alguna de las promesas esta se ignora y toma en cuenta las
promesas que no tienen errores, tratando de ejecutar la promesa mas rapida

en caso de que la promesa mas rapida genere un error, es la primera que se resuelve 
*/