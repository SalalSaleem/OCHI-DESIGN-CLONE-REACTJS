import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

function App() {
  return (
    <div className="w-full h-screen text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App