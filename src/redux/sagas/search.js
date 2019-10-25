import { put, call , takeLatest } from 'redux-saga/effects';
import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionTypes'; //importamoos las actions creadas

// añadimos la función generadora (lleva *)
export function* searchMovie({ payload }) {
    try {
        
    } catch (error) {
        
    }
}
// exportamos para ponerlo dentro del watcher 
// y que las sagas esten escuchando a ser llamadas
export default function* search(){
    //takeLatest va a aescuchar a SEARCH_MOVIE_START y 
    // cuando inicie la acción, vamos a llamar a la acción vamos a llamar la funcion de searchMovie.
    yield takeLatest(SEARCH_MOVIE_START, searchMovie)
}
