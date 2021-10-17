import React, { useState, useEffect, useRef } from 'react'

// Favorite Track 5
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavoriteTrack } from '../store/modules/shop/actions'
import '../styles/global.css'

// Icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsPlay } from 'react-icons/bs'
import { SiDeezer, SiStatuspage } from 'react-icons/si'

// others
import { Howl, Howler } from 'howler';

const TrackComponent = ({ tracks }) => {

  // Favorite Track 6
  const dispatch = useDispatch();
  const { favoriteTracks } = useSelector((state) => state.shop);
  const favorited = favoriteTracks.findIndex((t) => t.id === tracks.id) !== -1;

  // Botão de Prévia da musica
  const [btnPreview, setBtnPreview] = useState(false);

  // Após o clique, desativa o botão de play.
  const soundPlay = (src) => {
    setBtnPreview(true);
    // console.log(btnPreview)
    const tracks = new Howl ({
      src,
      html5: true,
      onend: function() {
        setBtnPreview(false); // Ativa novamente o botão de play.
      }
    })
    tracks.play()
    // console.log(tracks);
  }

  // Decidi deixar as horas pra caso for um podcast longo.
  const secondsConverter = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8)

  const wordLimiter = (string) => {
    const limitedString = string.substr(0,17)
    if (limitedString.length >= 13) return `${limitedString}...`
    else return limitedString
  }

  return (
      <div className="track-component">
        <div className="action-bar">
          
          {/* Está tocando renderiza pause. Não está tocando renderiza play. */}
          <button className="btn btn-play" disabled={btnPreview} 
          onClick={() => soundPlay(tracks.preview)}>
            <BsPlay/>
          </button>   

          {/* Favorite Track 7 - O tracks usado aqui é o que vem dinamico por props */}
          <button className="btn btn-add-to-favorites"
          onClick={() => dispatch(toggleFavoriteTrack(tracks))}>
            {favorited ? <AiFillHeart/> : <AiOutlineHeart />}
          </button>

          {/* tracks.link: música completa */}
          <a href={tracks.link} className="btn btn-listen-on-deezer">
            <SiDeezer/>
          </a>
        </div>
        <img className="deezer-track-photo" src={ tracks.album.cover_medium }/>
        <ul className="track-info">
          <li>{ wordLimiter(tracks.title) }</li>
          <li>{ wordLimiter(tracks.artist.name) }</li>
          <li>{ secondsConverter(tracks.duration) }</li>
        </ul>
      </div>
  )
}

export default TrackComponent
