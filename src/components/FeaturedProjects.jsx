import { useState, useEffect, useRef } from 'react';
import './FeaturedProjects.css';

/* ── Project data ──────────────────────────────────── */
const PROJECTS = [
  {
    id: 'p1',
    num: '01',
    title: 'CEFI OSA Management Information System',
    role: 'Capstone Project · Full-Stack Developer',
    desc: 'A web application built to solve the existing errors in the manual process of passing campus activity proposals for students. By digitalizing the entire proposal lifecycle, the platform eliminates manual processing errors, automates signatory routing, and drastically accelerates operational approval speeds.',
    bullets: [
      'Centralized activity calendar giving proposers real-time visibility into campus events to avoid date and venue conflicts before submission.',
      'Intelligent schedule checker that validates proposed dates and venues against existing or pending approvals to prevent rejection.',
      'Smart digital proposal form with auto-filled signatories based on activity type — reducing manual paperwork for students.',
    ],
    tags: ['PHP', 'MySQL', 'HTML', 'JavaScript', 'Bootstrap'],
    media: 'dashboard',
    docPage: 'student-portal-docs',
  },
  {
    id: 'p3',
    num: '02',
    title: 'OVG Records Management System',
    role: 'Government Intern · Web App Developer',
    desc: 'Cloud-based records management and performance evaluation system for the Cultural Services division of OVG Quezon. Indexes all outgoing official communications and auto-compiles staff output data into structured insight and PDF evaluation reports — reducing workflow task time.',
    bullets: [
      'Indexes all outgoing letters, invitations, and donation requests with auto-assigned reference IDs.',
      'Maps employee output data from Sheets directly to pre-built IPCR PDF templates.',
      'Provides a centralized dashboard for letters analytics, and summary report in real time.',
    ],
    tags: ['Google Apps Script', 'Google Sheets', 'HTML', 'Tailwind CSS', 'JavaScript'],
    media: 'pdf',
    docPage: 'ovg-cultural-docs',
  },
  {
    id: 'p2',
    num: '03',
    title: 'Social Services System',
    role: 'GO-STAN · Web App Developer ',
    desc: 'Cloud-based tracking platform for the Office of the Vice Governor of Quezon — managing regional medical, burial, and financial aid distribution. Replaced hand-written ledgers with auto-syncing Google Sheets driven by Apps Script triggers.',
    bullets: [
      'Unified dashboard tracking medical, burial, and financial aid across three sub-systems.',
      'Auto-generated IPCR PDF evaluation reports compiled from live sheet data.',
      'Real-time analytics view showing aid distribution volumes by category and barangay.',
    ],
    tags: ['Google Apps Script', 'Google Sheets', 'HTML', 'Tailwind CSS', 'JavaScript'],
    media: 'spreadsheet',
    docPage: 'ovg-social-docs',
  },
  {
    id: 'p4',
    num: '04',
    title: 'OVG Department System',
    role: 'GO-STAN · Web App/Automation Developer',
    desc: 'Automated document lifecycle and self-archiving controller for the Office of the Vice Governor. Monitors file creation timestamps, moves aged records to year-labelled archive directories on a fiscal schedule, and rebuilds the active workspace — with zero manual intervention.',
    bullets: [
      'Weekly lifecycle scan flags outdated files across all Sheets and Drive folders automatically.',
      'Annual archive engine moves expired records to /YYYY-Archive/ directories on fiscal rollover.',
      'Rebuilds and resets the active directory structure for the incoming fiscal year.',
    ],
    tags: ['Google Apps Script', 'Google Sheets', 'HTML', 'Tailwind CSS', 'JavaScript'],
    media: 'archive',
    docPage: 'ovg-department-docs',
  },
];

/* ── Media mock renderers ──────────────────────────── */
function DashboardMock() {
  const bars = [65, 88, 42, 72, 95, 58, 81];
  return (
    <div className="mock-wrap">
      <div className="mockup-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <div className="chrome-url">https://cefi-osa.edu.ph/dashboard</div>
      </div>
      <div className="mock-body dash-body">
        <div className="dash-stat-row">
          {[['24', 'Pending'], ['11', 'Approved'], ['3', 'Rejected']].map(([v, l]) => (
            <div className="dash-stat" key={l}><span className="ds-val">{v}</span><span className="ds-lbl">{l}</span></div>
          ))}
        </div>
        <div className="dash-chart">
          {bars.map((h, i) => (
            <div className="bar-col" key={i}>
              <div className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
            </div>
          ))}
        </div>
        <div className="dash-rows">
          {['Eco-Waste Seminar', 'IT Bootcamp 2026', 'Cultural Night', 'Sports Fest'].map((n, i) => (
            <div className="dash-row" key={i}>
              <span className="dr-name">{n}</span>
              <span className={`dr-badge ${i === 0 ? 'approved' : i === 1 ? 'pending' : i === 2 ? 'review' : 'approved'}`}>
                {i === 0 ? 'Approved' : i === 1 ? 'Pending' : i === 2 ? 'In Review' : 'Approved'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpreadsheetMock() {
  const [logs, setLogs] = useState([
    { t: '09:41', type: 'assist', txt: 'Medical aid — Santos, R. · ₱5,000 disbursed' },
    { t: '09:38', type: 'letter', txt: 'Invitation indexed — Mayor Reyes, Lucena City' },
    { t: '09:35', type: 'doc', txt: 'Office doc filed — Resolution No. 2026-012' },
  ]);
  const types = ['assist', 'letter', 'doc'];
  const texts = [
    'Financial aid — Cruz, M. · ₱3,500 disbursed',
    'Donation request indexed — DSWD Quezon',
    'Burial aid — Dela Rosa, J. · ₱8,000 logged',
    'Official letter — SP Session Notice',
    'Document archived — Memo Circular 04',
  ];
  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLogs(prev => [
        { t: now, type: types[Math.floor(Math.random() * 3)], txt: texts[Math.floor(Math.random() * texts.length)] },
        ...prev.slice(0, 4),
      ]);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mock-wrap">
      <div className="mockup-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <div className="chrome-url">ovg_records_tracker.gs · Apps Script</div>
      </div>
      <div className="mock-body">
        <div className="ss-stats">
          {[['284', 'Social Aid'], ['142', 'Letters'], ['189', 'Documents']].map(([v, l]) => (
            <div className="ss-stat" key={l}><span className="ss-val">{v}</span><span className="ss-lbl">{l}</span></div>
          ))}
        </div>
        <div className="console-header">
          <div className="live-dot" /><span>Live trigger output</span>
        </div>
        <div className="console-body">
          {logs.map((log, i) => (
            <div className="log-row" key={i}>
              <span className="log-t">[{log.t}]</span>
              <span className={`log-badge ${log.type}`}>{log.type === 'assist' ? 'AID' : log.type === 'letter' ? 'MAIL' : 'DOC'}</span>
              <span className="log-txt">{log.txt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PdfMock() {
  const [step, setStep] = useState(0);
  const steps = ['Reading correspondence index…', 'Mapping employee output data…', 'Compiling PDF template fields…', 'Generating IPCR Summary Report…', 'Uploading to Drive · /Evaluations/2026/…'];
  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % steps.length), 1800);
    return () => clearInterval(id);
  }, []);
  const pct = Math.round(((step + 1) / steps.length) * 100);

  return (
    <div className="mock-wrap">
      <div className="mockup-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <div className="chrome-url">compile_ipcr_report.gs</div>
      </div>
      <div className="mock-body pdf-body">
        <div className="pdf-preview">
          <div className="pdf-header-bar" />
          {[90, 60, 75, 45, 85, 50].map((w, i) => (
            <div key={i} className="pdf-line" style={{ width: `${w}%`, animationDelay: `${i * 0.12}s` }} />
          ))}
          <div className="pdf-table">
            {['Records logged', 'Letters processed', 'PDFs generated'].map((r, i) => (
              <div className="pdf-table-row" key={i}>
                <span>{r}</span><span className="pdf-val">{[47, 23, 12][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pdf-pipeline">
          <div className="pipe-label">{steps[step]}</div>
          <div className="pipe-bar"><div className="pipe-fill" style={{ width: `${pct}%` }} /></div>
          <span className="pipe-pct">{pct}%</span>
        </div>
      </div>
    </div>
  );
}

function ArchiveMock() {
  const folders = [
    { name: '2024-Archive', count: 312, status: 'archived' },
    { name: '2025-Archive', count: 284, status: 'archived' },
    { name: 'Active-2026', count: 96, status: 'active' },
    { name: 'Pending-Move', count: 14, status: 'moving' },
  ];
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setMoving(m => !m), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mock-wrap">
      <div className="mockup-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <div className="chrome-url">archive_controller.gs · Auto-trigger</div>
      </div>
      <div className="mock-body archive-body">
        <div className="arch-folders">
          {folders.map((f, i) => (
            <div className={`arch-folder ${f.status} ${f.status === 'moving' && moving ? 'moving-anim' : ''}`} key={i}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              <div>
                <div className="af-name">{f.name}</div>
                <div className="af-count">{f.count} files</div>
              </div>
              <span className={`af-badge ${f.status}`}>
                {f.status === 'moving' && moving ? '→ Moving' : f.status === 'active' ? 'Live' : 'Archived'}
              </span>
            </div>
          ))}
        </div>
        <div className="arch-log">
          <div className="arch-log-title">
            <div className={`live-dot ${moving ? '' : 'paused'}`} />
            <span>{moving ? 'Lifecycle trigger running…' : 'Watching for aged files…'}</span>
          </div>
          <div className="arch-log-line">Files older than 365 days → /2025-Archive/</div>
          <div className="arch-log-line">Refreshed Active-2026 directory structure</div>
          <div className="arch-log-line">Next run: Jan 01, 2027 00:00 UTC+8</div>
        </div>
      </div>
    </div>
  );
}

const MEDIA_MAP = { dashboard: DashboardMock, spreadsheet: SpreadsheetMock, pdf: PdfMock, archive: ArchiveMock };

/* ── Component ─────────────────────────────────────── */
const FeaturedProjects = ({ onViewDocs }) => {
  const [active, setActive] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.dataset.idx);
            if (!isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setItemRef = (el) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  };

  return (
    <section className="fp-section" id="projects-section">
      <div className="fp-split">
        {/* Left: text descriptions */}
        <div className="fp-left">
          <div className="fp-header">
            <span className="section-label">Featured work</span>
            <h2 className="fp-title">Projects</h2>
          </div>
          {PROJECTS.map((p, i) => {
            const MockComponent = MEDIA_MAP[p.media];
            return (
              <div
                key={p.id}
                ref={setItemRef}
                data-idx={i}
                className={`fp-text-block ${active === i ? 'fp-active' : ''}`}
              >
                <span className="fp-num">{p.num}</span>
                <div className="fp-role">{p.role}</div>
                <h3 className="fp-proj-title">{p.title}</h3>
                <p className="fp-desc">{p.desc}</p>
                <ul className="fp-bullets">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="fp-tags">
                  {p.tags.map((t) => <span key={t} className="fp-tag">{t}</span>)}
                </div>

                {/* Documentation button — renders for every project that has a doc page */}
                {p.docPage && (
                  <button className="fp-action-btn" onClick={() => onViewDocs(p.docPage)}>
                    <span>View Full Documentation</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}

                {/* Mobile-only media */}
                <div className="fp-mobile-media">
                  <MockComponent />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: sticky media */}
        <div className="fp-right">
          <div className="fp-sticky-viewer">
            {PROJECTS.map((p, i) => {
              const Mock = MEDIA_MAP[p.media];
              return (
                <div key={p.id} className={`fp-media-slide ${active === i ? 'fp-visible' : ''}`}>
                  <div className="fp-media-frame">
                    <Mock />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
