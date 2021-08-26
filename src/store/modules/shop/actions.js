import types from './types';

/* TRACKS INICIAIS */
export function homeTracks() {
    return { type: types.HOME_TRACKS}
}

// tracks é o objeto que quero enviar para meu reducer
export function setHomeTracks(tracks) {
    return { type: types.SET_HOME_TRACKS,tracks }
}

// ok
// USUÁRIO BUSCANDO 8-A - nesta etapa precisa olhar na api pra ver como ela espera receber o dado (ou seja, precisa ter a rota já criada lá no node.js, e testada no insomnia, pra gente colocar ela no saga, e depois, preparar essa action aqui pro saga receber.)
export function userSearchTracks(search) {
    return { type: types.USER_SEARCH_TRACKS, search }
}

// ok
// USUÁRIO BUSCANDO 9 - o parâmetro tracks é o que será enviado para o nosso reducer. (que nós pegamos com o saga lá na requisição. )
export function setUserSearchTracks(tracks) {
    return { type: types.SET_USER_SEARCH_TRACKS, tracks }
}

// Favorite Track 2
export function toggleFavoriteTrack(tracks) {
    return { type: types.TOGGLE_FAVORITE_TRACK, tracks }
}

/* CART */
/* ADD TRACK TO FAVORITES */
/* REMOVE TRACK FROM FAVORITES */