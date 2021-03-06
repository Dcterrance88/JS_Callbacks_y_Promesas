const heroes = {
    capi: {
        nombre: 'Capitán H',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Ser inteligente y chilionario'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Be fabulous'
    }
}

//forma sincrona
export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}
//forma asincrona
export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw `No existe un héroe con el id ${id}`;
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export {
    promesaLenta, promesaMedia, promesaRapida
}