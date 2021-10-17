import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { homeTracks, userSearchTracks } from '../../store/modules/shop/actions'

// Components
import TrackComponent from '../../components/TrackComponent';
import Pagination from '../../components/Pagination';

// Icones
import { BsSearch } from 'react-icons/bs'
import Header from '../../components/Header';

const Playlist = ({ match }) => {

  const dispatch = useDispatch();
  const { tracks } = useSelector((state) => state.shop)
  const { favoriteTracks } = useSelector((state) => state.shop);

  // Armazena o que o usuário digitou (useState + onChange)
  const [search, setSearch] = useState('');
  const [searchOption, setSearchOption] = useState('título');

  // Realiza a primeira busca para já ter o que mostrar pro usuário quando ele abrir o app pela primeira vez.
  useEffect(() => {
    if (match.params.search) {
      dispatch(userSearchTracks(match.params.search));
    }
    else {
      dispatch(homeTracks());
    }
  }, [dispatch, match.params.search])

  /* Paginação 1 - Acredito que se no retorno da requisição forem mais de 100 objetos, o ideal é fazer várias requisições separadas.
  Neste caso aqui eu fiz uma requisição só, e fiz a paginação somente no front mesmo, supondo baixo volume da dados. */
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(20);
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = favoriteTracks.slice(indexOfFirstTrack, indexOfLastTrack)


 // Paginação
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="estrutura">

        <Header />

        <div className="busca">
          {/* BUSCA 3 - Vai retornar tudo que o deezer tiver com aquele valor. */}
          <form className="search-form" action={`/search/${search}`}>
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
          
          {/* Paginação 2 - Ao invés de dar loop do tracks, faço no currentTracks, para mostrar X objetos de cada vez. */}
          <div className="track-container-flex">
            {currentTracks.filter((currentTracks) => {

            // Retorna tudo
            if (searchOption === "título") return currentTracks
            
            // Retorna somente os que o nome do album contém o termo pesquisado
            else if (searchOption === "album" && currentTracks.album.title.toLowerCase().includes(search.toLowerCase())) return currentTracks
           
            // Retorna somente os que o nome do artista contém o termo pesquisado
            else if (searchOption === "artista" && currentTracks.artist.name.toLowerCase().includes(search.toLowerCase())) return currentTracks

            return null

            }).map((currentTracks) => (
              <TrackComponent tracks={currentTracks}/>
            ))}
          </div>
        </div>

        <Pagination tracksPerPage={tracksPerPage} totalTracks={tracks.length} paginate={paginate}/>

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
