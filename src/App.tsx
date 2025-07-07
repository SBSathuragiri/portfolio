import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="project"><Project /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
