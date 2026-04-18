import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
     <div className="min-h-screen bg-black text-white dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#312e81] dark:text-white transition-colors duration-500">
      <Navbar />
      <main className="container mx-auto px-4">
        <section id="home" className="pt-20"><Hero /></section>
        <section id="about" className="pt-20"><About /></section>
        <section id="skills" className="pt-20"><Skills /></section>
        <section id="projects" className="pt-20"><Projects /></section>
        <section id="contact" className="pt-20"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
