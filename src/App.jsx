import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import News from './pages/News'

const App = () => {
  return (
    <div className=' bg-slate-300'>
       
        <Home />
    </div>
  )
}

export default App