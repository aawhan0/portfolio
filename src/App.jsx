import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import SplashCursor from './components/SplashCursor';

const App = () => {
  return <div className='container mx-auto max-w-7xl'>
    <SplashCursor /> {/* Cursor ripple effect applied globally */}
    <Navbar />
    <Hero />
    <About />
    <section className='min-h-screen'/>
    <section className='min-h-screen'/>
    <section className='min-h-screen'/>
    <section className='min-h-screen'/>
      {/* about */}
      {/* projects */}
      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>
}

export default App