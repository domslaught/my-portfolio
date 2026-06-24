import { useEffect, useState } from 'react';
import Scene from './three/Scene';
import Hero from './components/Hero';
import Impact from './components/Impact';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import StudentPortalDocs from './components/StudentPortalDocs';
import OVGSocialDocs from './components/OVGSocialDocs';
import OVGCulturalDocs from './components/OVGCulturalDocs';
import OVVGDeptDocs from './components/OVVGDeptDocs';
import Toolkit from './components/Toolkit';
import './App.css';

const DOC_VIEWS = ['student-portal-docs', 'ovg-social-docs', 'ovg-cultural-docs', 'ovg-department-docs'];

function App() {
  const [view, setView] = useState('portfolio');
  const [scrolled, setScrolled] = useState(false);

  /* Navbar scroll-state toggler */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    if (DOC_VIEWS.includes(view)) {
      setView('portfolio');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goBack = () => setView('portfolio');

  /* ── Doc view routing ── */
  if (view === 'student-portal-docs') return <StudentPortalDocs onBack={goBack} />;
  if (view === 'ovg-social-docs') return <OVGSocialDocs onBack={goBack} />;
  if (view === 'ovg-cultural-docs') return <OVGCulturalDocs onBack={goBack} />;
  if (view === 'ovg-department-docs') return <OVVGDeptDocs onBack={goBack} />;

  return (
    <div className="portfolio-app">
      {/* ── Fixed R3F 3D background canvas ── */}
      <Scene />
      {/* ── Floating glassmorphic navbar ── */}
      <header className={`portfolio-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* Geometric reticle logo */}
          <a href="#" className="nav-logo" onClick={scrollTo('portfolio-app')} aria-label="Home">
            <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 6,10 L 16,4 L 26,10 L 26,22 L 16,28 L 6,22 Z" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M 6,16 L 16,10 L 26,16 L 16,22 Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
              <line x1="16" y1="4" x2="16" y2="28" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
            </svg>
          </a>

          <nav className="nav-links">
            <a href="#impact-section" onClick={scrollTo('impact-section')}>About</a>
            <a href="#projects-section" onClick={scrollTo('projects-section')}>Projects</a>
            <a href="#toolkit-section" onClick={scrollTo('toolkit-section')}>Toolkit</a>
            <a href="#experience-section" onClick={scrollTo('experience-section')}>Experience</a>
            <a href="mailto:domdomriosa@gmail.com" className="nav-contact-btn">
              Let's talk
            </a>
          </nav>
        </div>
      </header>

      {/* ── Page sections ── */}
      <main>
        <Hero />
        <Impact />
        <FeaturedProjects
          onViewDocs={(docId) => setView(docId)}
        />
        <Toolkit />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;