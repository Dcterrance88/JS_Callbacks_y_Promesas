import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// buscarHeroe( heroeId1, (err, heroe1) => {
//     if(err){ return console.error(err); }
//     buscarHeroe( heroeId2, (err, heroe2) => {
//         if(err){ return console.error(err); }
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

//then cuando todo sucede correctamente, el catch cuando sucede un error y el finally es para realizar
//algun tipo de limpieza y siempre se va a ejecutar despues de que se ejecuta el them o el catch
// buscarHeroe(heroeId1).then(heroe1 =>{
//     // console.log(`Enviando a ${ heroe.nombre } a la misión`);
//     buscarHeroe(heroeId2).then( heroe2 =>{
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) =>{
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
});

console.log('Fin de programa')

/*
Callback: no es mas que una funcion que se manda como argumento en otra funcion.
Promesa: es un acuerdo entre dos partes a travez de la cual una de ellas se compromete a realizar algo,
ante el cumplimiento de una condicion o el vencimiento de un plazo
*/
