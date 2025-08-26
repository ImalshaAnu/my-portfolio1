import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cocolanka from "./pages/Cocolanka";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/projects/cocolanka" element={<Cocolanka />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
