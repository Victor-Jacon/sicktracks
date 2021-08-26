/* REDUX
Ele serve para mesclar todos os estados do reducer em um estado único de verdade, pra que aí sim possamos usar.
Importo aqui o combineReducers, é padrão do rootReducer
*/

import { combineReducers } from 'redux'
import shop from './shop/reducer'

export default combineReducers({
  shop,
})