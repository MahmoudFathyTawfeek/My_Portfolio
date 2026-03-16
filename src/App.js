import React from 'react';
import { ThemeProvider } from './components/themeContext';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";



function App() {
  return (
    <div>
       <React.StrictMode>
       <ThemeProvider>
      <Header />
      <Hero />
      <About />
       <Skills />
     <Projects />
     <Certificates />
      <Contact />
      <Footer /> 
      </ThemeProvider>
       </React.StrictMode>
    </div>
  );
}

export default App;
