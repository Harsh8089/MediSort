import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Search from './screens/Search'
import Contact from './screens/Contact'
import './font.css'
import Nav from './components/Nav'


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
} 

export default App