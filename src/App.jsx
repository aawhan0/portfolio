import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import SplashCursor from './components/SplashCursor';
import GooeyNav from './components/GooeyNav';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];



const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <SplashCursor /> {/* Cursor ripple effect applied globally */}
      {/* <GooeyNav items={navItems} /> Updated navbar here */}
        <div className="container mx-auto max-w-7xl" style={{ position: 'relative', zIndex: 0 }}>
          {/* Your cards and page content here */}
        </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      {/* about */}
      {/* projects */}
      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>
  );
};

export default App;
