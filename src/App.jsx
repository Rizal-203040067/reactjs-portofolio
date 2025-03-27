import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Platform from "./components/Platform";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Navbar />
      <Hero />
      <Platform />
      <Service />
      <Portofolio />
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
