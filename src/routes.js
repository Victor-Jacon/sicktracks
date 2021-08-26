import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/global.css'

import React from 'react'
import Home from './pages/Home'
import Playlist from './pages/Playlist'

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/search/:search" exact component={Home}/>
        <Route path="/playlist" exact component={Playlist}/>
      </Router>
    </>
  )
}

export default Routes
