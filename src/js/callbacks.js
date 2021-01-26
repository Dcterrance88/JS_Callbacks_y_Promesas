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

export const buscarHeroe = ( id , callback) => {

    const heroe = heroes[id];

    if(heroe){
        callback(null, heroe);
    }else {
        //passo un error
        callback(`No existe un héroe con el id ${ id }`);
    }


    // callback(heroe);
}