import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeTracks, userSearchTracks } from '../../store/modules/shop/actions'
import TrackComponent from '../../components/TrackComponent';
import '../../index.css'

// Icones
import { BsSearch } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import Header from '../../components/Header';

const Playlist = ({ match }) => {

  const dispatch = useDispatch();
  const { tracks } = useSelector((state) => state.shop)
  const { favoriteTracks } = useSelector((state) => state.shop);

  // Armazena o que o usuário digitou (useState + onChange)
  const [search, setSearch] = useState('');

  // Armazena o que o usuário selecionou (useState + onChange)
  const [searchOption, setSearchOption] = useState('título');

  // Realiza a primeira busca para já ter o que mostrar pro usuário quando ele abrir o app pela primeira vez.
  useEffect(() => {
    if (match.params.search) {
      dispatch(userSearchTracks(match.params.search));
    }
    else {
      dispatch(homeTracks());
    }
  }, [])

  const handleSearch = () => {
    // console.log(searchOption) // debug Quando for .filter
    // console.log(match.params.search) debug
  }

  return (
    <div className="estrutura">

        <Header />

        <div className="busca">
          {/* BUSCA 3 - Vai retornar tudo que o deezer tiver com aquele valor. */}
          <form className="search-form" action={`/search/${search}`} onSubmit={handleSearch()}>
            <input className="search" type="text" placeholder="Search.." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}/>

            {/* BUSCA 4 - Vai filtrar o objeto track */}
            <div className="search-actions">
              <select className="search-select" value={searchOption} onChange={(e)=> setSearchOption(e.target.value)}>
                <option value="título">título</option>
                <option value="artista">artista</option>
                <option value="album">album</option>
              </select>

              <button className="searchbutton" type="submit">
                <BsSearch />
              </button>
            </div>
          </form>
        </div>

        {/* Listagem 1 */}

        <div className="track-container-grid">
          <h1 className="track-container-grid-title">Trending Tracks</h1>
          
          <div className="track-container-flex">
            {favoriteTracks.filter((t) => {

            // Retorna tudo
            if (searchOption == "título") return t
            
            // Retorna somente os que o nome do album contém o termo pesquisado
            else if (searchOption == "album" && t.album.title.toLowerCase().includes(search.toLowerCase())) return t
           
            // Retorna somente os que o nome do artista contém o termo pesquisado
            else if (searchOption == "artista" && t.artist.name.toLowerCase().includes(search.toLowerCase())) return t

            }).map((t) => (
              <TrackComponent tracks={t}/>
            ))}
          </div>
        </div>

        {!favoriteTracks && (
          <>
            <div className="qa-no-tracks">
              You don't have any favorite tracks yet, wanna try adding some?
            </div>
            <a href="/">
              <button type="submit" className="qa-btn-tracks">
                Add Songs
              </button>
            </a>
          </>
        )}

    </div>
  )
}

export default Playlist
