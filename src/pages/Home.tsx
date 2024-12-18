import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;