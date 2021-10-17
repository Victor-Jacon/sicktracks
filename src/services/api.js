/*
Crio o arquivo api.js
yarn add axios
importo axios
Configuro o axios (create, base url, passo ali a url do meu server, e exporto a api) */

// USUÁRIO BUSCANDO 6

import axios from 'axios';

/*
// server search - local api
export const api = axios.create({
    baseURL: 'http://localhost:3000'
})
*/

// server search - local api
export const api = axios.create({
    baseURL: 'https://sicktracks-api.vercel.app'
})

// serverless search
export const homeFetch = async () => {
    const url = 'https://sicktracks-api.vercel.app/api/home'
    const response = await axios.get(url)
    .then(res => res.data.data.data)
    .catch (err => console.error(err))
    return response
} 