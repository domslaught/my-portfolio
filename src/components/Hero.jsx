import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const phrases = [
  "manual tasks",
  "spreadsheet friction",
  "system overhead",
  "process bottlenecks"
];

const Hero = () => {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  /* Cursor-tracked radial glow */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  /* Phrase rotation timer */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero-section" ref={sectionRef}>

      {/* Dark grid pattern */}
      <div className="hero-grid-pattern" />

      {/* Interactive cursor glow */}
      <div className="hero-cursor-glow" />

      {/* Content */}
      <div className="hero-content">
        <span className="section-label">let's work together</span>

        <h1 className="hero-headline">
          {/* CHANGED: Merged into a single, punchier line that fits nicely without stretching */}
          <span className="line line-1">
            I build workflows that cut{' '}
            <span className="rotating-text-container">
              {phrases.map((phrase, idx) => {
                let status = 'idle';
                if (idx === index) {
                  status = 'active';
                } else if (idx === (index - 1 + phrases.length) % phrases.length) {
                  status = 'exit';
                }
                return (
                  <span key={phrase} className={`rotating-text-item ${status}`}>
                    {phrase}
                  </span>
                );
              })}
            </span>
          </span>

          <span className="line line-2">
            and deliver valuable{' '}
            <span className="word-highlight cyber-eye-wrapper">
              insights.
              <svg
                viewBox="0 0 340 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="eye-aperture-graphic"
                aria-hidden="true"
              >
                <path
                  d="M 10,25 C 90,42 250,42 330,25"
                  stroke="#FF5722"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 40,20 C 110,2 230,2 300,20"
                  stroke="rgba(255, 87, 34, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="170" cy="22" r="5" fill="#FF5722" fillOpacity="0.15" />
                <circle cx="170" cy="22" r="2" fill="#FF5722" />
              </svg>
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          BS Information Systems graduate specializing in building high-efficiency
          digital tools, custom dashboards, and automated systems that scale.
        </p>

        <div className="hero-actions">
          <a
            href="#projects-section"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See my work
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="mailto:domdomriosa@gmail.com" className="btn-ghost">
            Get in touch
          </a>
        </div>

        {/* Scroll invite */}
        <div className="scroll-invite">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;