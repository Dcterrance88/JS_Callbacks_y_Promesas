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

export const buscarHeroe = (id) =>{

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        if ( heroe) {
            resolve(heroe);
        }else{
            reject(`No existe un héroe con el id ${ id }`);
        }
    });

}