import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

// export const obtenerHeroesArr = async() => await Promise.all(heroesIds.map(buscarHeroe));

export const obtenerHeroesArr = async() => {
    return await Promise.all(heroesIds.map(buscarHeroe));
}

export const obtenerHeroeAwait = async(id) => {
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder',
        }
    }
}

export const heroesCiclo = async() => {
    console.time('heroesCiclo');
    for await (const heroe of heroesPromesas){
        console.log(heroe)
    }
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));
    console.timeEnd('heroesCiclo');
}

export const heroeIfAwait = async (id)=>{
    if((await buscarHeroeAsync(id)).nombre === 'IronMan'){
        console.log('Es el mejor de todos');
    }else {
        console.log('Naaa');
    }
}
