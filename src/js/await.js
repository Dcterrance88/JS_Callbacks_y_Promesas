import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

// export const obtenerHeroesArr = async() => await Promise.all(heroesIds.map(buscarHeroe));

export const obtenerHeroesArr = async() => {
    return await Promise.all(heroesIds.map(buscarHeroe));
}
