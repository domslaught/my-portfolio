import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Magnetic offset: button follows cursor with slight lag
      setBtnPos({ x: x - 60, y: y - 24 });
      setBtnVisible(true);
    };
    const handleLeave = () => setBtnVisible(false);

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <footer className="footer-section" ref={sectionRef}>
      {/* Magnetic floating button */}
      <a
        href="mailto:domdomriosa@gmail.com"
        ref={btnRef}
        className={`magnetic-btn ${btnVisible ? 'visible' : ''}`}
        style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
        aria-label="Send an email"
      >
        Email me →
      </a>

      <div className="footer-inner">
        <span className="section-label">Contact</span>

        <a href="mailto:domdomriosa@gmail.com" className="footer-cta-text">
          Let's build something<br />
          <span className="cta-bleed">efficient.</span>
        </a>

        <div className="footer-meta">
          <div className="footer-info">
            <span>Dominic R. Martinez</span>
            <span className="meta-sep">·</span>
            <span>Lucena City, Philippines</span>
            <span className="meta-sep">·</span>
            <a href="mailto:domdomriosa@gmail.com" className="footer-email">
              domdomriosa@gmail.com
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} · Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
