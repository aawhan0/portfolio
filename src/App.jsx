import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import SplashCursor from './components/SplashCursor';

return (
    <>
      <SplashCursor /> {/* Background water ripple effect */}
      <div className="container mx-auto max-w-7xl" style={{ position: 'relative', zIndex: 0 }}>
        <Navbar />
        <Hero />
        <About />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        {/* about */}
        {/* projects */}
        {/* experience */}
        {/* contact */}
        {/* footer */}
      </div>
    </>
  );
;

export default App;