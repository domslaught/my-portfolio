import { useEffect, useRef, useState } from 'react';
import './Impact.css';

const SERVICES = [
  {
    title: 'Full-Stack Systems Development',
    desc: 'End-to-end web platforms using PHP, MySQL, JavaScript, and Bootstrap — from database schema to polished UI.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tag: 'SYS_BUILD',
  },
  {
    title: 'Google Cloud Workspace Automation',
    desc: 'Trigger-based Apps Script engines that replace manual office work — records, letters, and financial aid logs updated automatically.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tag: 'AUTOMATE',
  },
  {
    title: 'Data Analytics & Live Dashboards',
    desc: 'Real-time analytics dashboards that visualise output metrics, processing speeds, and workflow throughput across multiple systems.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tag: 'ANALYTICS',
  },
];

const METRICS = [
  {
    value: 4,
    suffix: '',
    label: 'Deployed Systems',
    note: '1 full-stack capstone · 3 cloud automation systems',
    tag: 'PROD_SYSTEMS',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Automated File Lifecycles',
    note: 'Self-archiving directory engines',
    tag: 'LIFECYCLE_AUTO',
  },
];

/* ── Animated counter hook ──────────────────────────── */
const useCounter = (target, isVisible) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return count;
};

/* ── Flat telemetry metric ──────────────────────────── */
const MetricTelemetry = ({ value, suffix, label, note, tag, isVisible, delayIndex }) => {
  const count = useCounter(value, isVisible);
  return (
    <div className={`metric-telemetry reveal-item delay-${delayIndex}`}>
      <span className="metric-tag">{tag}</span>
      <div className="metric-readout">
        <span className="metric-value">{count}</span>
        <span className="metric-suffix">{suffix}</span>
      </div>
      <div className="metric-label">{label}</div>
      <div className="metric-note">{note}</div>
    </div>
  );
};

/* ── Main component ─────────────────────────────────── */
const Impact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [connectorDone, setConnectorDone] = useState(false);

  useEffect(() => {
    // 1. Intersection observer for initial load visibility
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);

    // 2. Scroll-progress calculations for vertical connector line
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start extending the line when the top of the section reaches 70% of viewport height
      const start = viewportHeight * 0.7;
      // Line is fully extended when the top of the section reaches 20% of viewport height
      const end = viewportHeight * 0.2;

      const progressVal = (start - rect.top) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, progressVal));

      // Performance optimization: Update style variables directly to avoid React re-renders on scroll
      sectionRef.current.style.setProperty('--scroll-progress', clampedProgress);

      if (clampedProgress >= 0.95) {
        setConnectorDone(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`impact-section${visible ? ' reveal-active' : ''}`}
      ref={sectionRef}
      id="impact-section"
    >
      <div className="impact-container">

        {/* ── Row 1: Top Block (Value Proposition & Telemetry Metrics) ── */}
        <div className="impact-row-top">
          {/* Left Side: Headline and description */}
          <div className="impact-val-prop">
            <span className="section-label reveal-item delay-0">Value proposition</span>
            <h2 className="impact-headline reveal-item delay-1">
              What value<br />do I bring?
            </h2>
            <p className="impact-body reveal-item delay-2">
              I bridge the gap between application development and administrative
              efficiency — creating robust digital systems that handle data tracking,
              automated document generation, and full file lifecycle management.
            </p>
          </div>

          {/* Right Side: Telemetry Metrics side-by-side */}
          <div className="impact-metrics-container">
            <div className="metrics-row">
              {METRICS.map((m, i) => (
                <MetricTelemetry
                  key={i}
                  {...m}
                  isVisible={visible}
                  delayIndex={i + 3}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 1.5: Vertical Data Link (Scroll-Triggered Connector) ── */}
        <div className={`impact-connector-wrap${connectorDone ? ' is-done' : ''}`} aria-hidden="true">
          <div className="impact-connector-line" />
          <span className="impact-connector-node top" />
          <span className="impact-connector-node bottom" />
        </div>

        {/* ── Row 2: Bottom Block (What I Do - 3 Service Columns) ── */}
        <div className={`impact-row-bottom${connectorDone ? ' start-reveal' : ''}`}>
          <span className="section-label">What I do</span>
          <div className="service-grid">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="service-col"
              >
                {/* Technical Monospace Tag */}
                <span className="service-tag">{svc.tag}</span>

                {/* Animated Column Content */}
                <span className="service-icon">{svc.icon}</span>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>

                {/* Accent Underline Highlight (revealed on hover) */}
                <span className="service-underline-bar" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;