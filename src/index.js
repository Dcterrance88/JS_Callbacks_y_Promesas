import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

console.time('await');

obtenerHeroeAwait('cap2i').then( heroe => {
    console.log(heroe);
    console.timeEnd('await');
}).catch(console.warn);