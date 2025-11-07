import { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const projectsRef = useRef(null);

  const handleViewWorks = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // smooth scroll behavior for anchor links
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="font-inter selection:bg-[#b33a3a]/20 selection:text-neutral-900">
      {/* Hero with Spline cover */}
      <Hero onViewWorks={handleViewWorks} />

      {/* About */}
      <About />

      {/* Skills with subtle grid aesthetics */}
      <Skills />

      {/* Projects */}
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
