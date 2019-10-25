import { all } from 'redux-saga/effects';

// para que la saga se este ejecutando esperando que una acción sea disparada
// la importamos en el index.js dentro de sagas
import search, { searchMovie } from './search';

export default function* rootSaga() {
	yield all([
		search()
	]);
}
