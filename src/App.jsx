import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';
import ThreeCards from './components/ThreeCards'

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div  className="w-full h-screen text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Featured/>
      <ThreeCards/>
    </div>
  )
}

export default App