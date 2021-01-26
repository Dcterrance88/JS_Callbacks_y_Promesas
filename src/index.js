import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi';

buscarHeroe( heroeId, (err, heroe) => {
    if(err){
        console.error(err);
    } else {
        console.info(heroe);
    }
});

/*
Callback: no es mas que una funcion que se manda como argumento en otra funcion.
*/
