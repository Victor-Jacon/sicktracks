import produce from 'immer';
import types from './types'

const INITIAL_STATE = {
  tracks: [],
  favoriteTracks: [] // Favorite Track 3
}

function shop (state = INITIAL_STATE, action) {
   switch (action.type) {

    /* TRACKS INICIAIS - Aqui o reducer está escutando o meu saga, pra realizar a atualizar do objeto. */
    case types.SET_HOME_TRACKS: {
      return produce(state, (draft) => {
          draft.tracks = action.tracks;
      })
    }

    // Buscando 11 - aqui pega os dados da requisição e atualiza no objeto tracks
    case types.SET_USER_SEARCH_TRACKS: {
      return produce(state, (draft) => {
          draft.tracks = action.tracks;
      })
    }

    // Favorite Track 4
    // A action TOGGLE é pra ativar e desativar.
    // Aqui eu já faço a verificação do dispatch, se vai ou não adicionar na lista de musicas favoritas.
    case types.TOGGLE_FAVORITE_TRACK: {
      return produce(state, (draft) => {
          const index = draft.favoriteTracks.findIndex((t) => t.id === action.tracks.id)
          
          if (index !== -1) {
            draft.favoriteTracks.splice(index, 1);
          } else {
            draft.favoriteTracks.push(action.tracks)
          }
      })
    }

    /* CART */
    /* ADD TRACK TO FAVORITES */
    /* REMOVE TRACK FROM FAVORITES */

    default:
      return state;
  }
}

export default shop;