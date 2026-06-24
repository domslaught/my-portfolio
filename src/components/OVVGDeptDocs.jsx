import { useEffect, useState } from 'react';
import './OVVGDeptDocs.css';

const OVVGDeptDocs = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sections = [
    { id: 'overview', label: '1.0 System Overview' },
    { id: 'photo-upload', label: '2.0 Photo Upload & Row Mapping' },
    { id: 'document-tracker', label: '3.0 Document Tracker' },
    { id: 'report-analytics', label: '4.0 Report & IPCR Analytics' },
    { id: 'data-archiving', label: '5.0 Data Archiving & Reset' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="docs-viewport">
      {/* ── Top Header ── */}
      <header className="docs-navbar">
        <div className="docs-nav-container">
          <button className="back-btn" onClick={onBack}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Portfolio</span>
          </button>
          <div className="docs-meta">
            <span className="docs-tag">DOC_ID: OVG_DEPARTMENT_SYS</span>
            <span className="docs-status-dot" />
            <span className="docs-status-text">OFFICIAL_WEB_APPLICATION</span>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        {/* ── Sidebar Navigation ── */}
        <aside className="docs-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">WEB APPLICATION</span>
            <span className="sidebar-sub">OVG Department System</span>
          </div>
          <nav className="sidebar-links">
            {sections.map((sec) => (
              <button
                key={sec.id}
                className={`sidebar-link ${activeSection === sec.id ? 'active' : ''}`}
                onClick={() => handleNavClick(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </nav>
          <div className="sidebar-tech-block">
            <div className="sidebar-tech-label">TECH STACK</div>
            {['Google Apps Script', 'Google Sheets', 'HTML', 'Tailwind CSS', 'JavaScript'].map(t => (
              <span key={t} className="sidebar-tech-tag">{t}</span>
            ))}
          </div>
        </aside>

        {/* ── Main Content Area ── */}
        <main className="docs-content">

          {/* Section 1: System Overview (The "Semi-System" Approach) */}
          <section id="overview" className="docs-section">
            <div className="docs-section-tag">SYSTEM_OVERVIEW</div>
            <h1 className="docs-section-title">System Overview (The "Semi-System" Approach)</h1>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE HYBRID DESIGN</div>
                <p className="docs-paragraph text-highlight">
                  A unique hybrid workflow architecture built around Google Sheets data control preferences.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This custom application utilizes a unique "semi-system" approach designed around the explicit workflow preferences of OVG department staff. Rather than forcing users out of their familiar spreadsheet environment, primary data entry remains directly within the centralized Google Sheet tabs (Accounting, Treasurer, BM & SP, OVG, HR, Resolution, Acting Gov, and Travel Order). The management system layers over these sheets, extracting and syncing data to provide advanced tracking, visual document indexing, and automated report generation without interrupting their daily spreadsheet-based routine.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/g5.png', alt: 'Google Sheets Tracking Columns' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://docs.google.com/spreadsheets/d/ovg-department-tracker</div>
                  </div>
                  <img src="/images/g5.png" alt="Google Sheets Tracking Columns" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Photo Upload & Row Mapping */}
          <section id="photo-upload" className="docs-section">
            <div className="docs-section-tag">ROW_MAPPING</div>
            <h2 className="docs-section-title">2.0 Photo Upload & Row Mapping</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Dual-record verification via unique record identifiers.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This multi-step photo upload interface achieves dual-record integrity across OVG operations. Users select a targeted department Sheet tab and specify a unique record ID. When a document's photo is uploaded, the system maps the attachment to a specific target folder in Google Drive and links its URL directly back to the matching record ID's row in the Google Sheet. This establishes a robust visual photographic backup linked to hard data entries, validating document reception and safeguarding audit histories.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/g1.png', alt: 'Photo Upload & Row Mapping' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-department.quezon.gov.ph/photo-upload</div>
                  </div>
                  <img src="/images/g1.png" alt="Photo Upload & Row Mapping" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Cross-Department Advanced Search & Document Tracker */}
          <section id="document-tracker" className="docs-section">
            <div className="docs-section-tag">DOCUMENT_TRACKER</div>
            <h2 className="docs-section-title">3.0 Cross-Department Advanced Search & Document Tracker</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Global query tracking and rapid cross-department file verification.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  The advanced search interface serves as a centralized lookup tool to monitor files moving in and out of the OVG office. By querying records across all or specific sheet sub-tabs, employees can instantly verify the exact location, specific travel order numbers, resolution details, or current routing status of any document. This module provides real-time status checks, cutting down retrieval search time and helping staff answer external inquiries with up-to-date data.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/g2.png', alt: 'Cross-Department Advanced Search' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-department.quezon.gov.ph/tracker</div>
                  </div>
                  <img src="/images/g2.png" alt="Cross-Department Advanced Search" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Dynamic Reporting & IPCR Analytics Workspace */}
          <section id="report-analytics" className="docs-section">
            <div className="docs-section-tag">IPCR_ANALYTICS</div>
            <h2 className="docs-section-title">4.0 Dynamic Reporting & IPCR Analytics Workspace</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Multi-sheet data aggregation and compliance metrics.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This workspace compiles summary reports by aggregating data across multiple tracking sheets. The UI controls allow users to toggle specific department checkboxes (Select All / Clear) alongside date range and year selectors. The generated report organizes this data to produce interactive bar charts and detailed breakdowns of document distribution across weeks and months. This compiling workflow is custom-tailored to satisfy IPCR (Individual Performance Commitment and Review) targets, providing quick compliance proof for department heads.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/g3.png', alt: 'Dynamic Reporting & IPCR Workspace' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-department.quezon.gov.ph/analytics</div>
                  </div>
                  <img src="/images/g3.png" alt="Dynamic Reporting & IPCR Workspace" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Data Archiving & Reset */}
          <section id="data-archiving" className="docs-section">
            <div className="docs-section-tag">DATA_ARCHIVING</div>
            <h2 className="docs-section-title">5.0 Data Archiving & Reset</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Year-end data archiving and active workspace reset.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  To prevent performance slowdowns and file clutter, the system includes an annual archiving pipeline. Administrators can select a target fiscal year to archive all records accumulated across all department tabs. When triggered, the system exports and moves all data to a newly created standalone spreadsheet file named <code>Archive (date selected)</code>. Following a successful transfer, the active workspace tabs are reset and cleared to a clean slate, resetting transaction ID counters and fully preparing the spreadsheet for another year of fresh data entry.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/g4.png', alt: 'Data Archiving & Reset Workspace' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-department.quezon.gov.ph/archive</div>
                  </div>
                  <img src="/images/g4.png" alt="Data Archiving & Reset Workspace" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      {activeLightbox && (
        <div className="lightbox-overlay" onClick={() => setActiveLightbox(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setActiveLightbox(null)} aria-label="Close image">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={activeLightbox.src} alt={activeLightbox.alt} className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OVVGDeptDocs;
