import { takeLatest, all, call, put, select } from 'redux-saga/effects' /* USUÁRIO BUSCANDO 2 */
import types from './types'; /* USUÁRIO BUSCANDO 4 */
import api from '../../../services/api' // USUÁRIO BUSCANDO 7
import { setHomeTracks, setUserSearchTracks } from './actions' // USUÁRIO BUSCANDO 10 - vamos enviar os dados para o reducer usando a action de atualização + método put do redux saga.

/* GET INICIAL */
export function* homeTracks() {
  const response = yield call(api.get, `/home`)
  const res = response.data;
  yield put(setHomeTracks(res.data.data)) /* Quando fizer a busca, vai sobreescrever o objeto tracks */
}

// USUÁRIO BUSCANDO 1 - ~err (parâmetro não está vindo)
export function* userSearchTracks(search) {
  const parameter = search.search
  const response = yield call(api.get, `/search/${parameter}`)
  const res = response.data;
  yield put(setUserSearchTracks(res.data.data)) /* Quando fizer a busca, vai sobreescrever o objeto tracks */
}

  /* CART */
  /* ADD TRACK TO FAVORITES */
  /* REMOVE TRACK FROM FAVORITES */

/* USUÁRIO BUSCANDO 5 */
export default all([
  takeLatest(types.HOME_TRACKS, homeTracks),
  takeLatest(types.USER_SEARCH_TRACKS, userSearchTracks),
]);