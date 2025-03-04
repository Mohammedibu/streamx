import React from 'react'
import Home from './pages/Home/Home'

import {Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={  <Login/>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/player/:id' element={<Player/>} />
        
      </Routes>
     
      
    </div>
  )
}

export default App
