import { useEffect, useState } from 'react';
import './StudentPortalDocs.css';

const OVGCulturalDocs = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sections = [
    { id: 'overview', label: '1.0 Overview' },
    { id: 'analytics', label: '2.0 Analytics Dashboard' },
    { id: 'management', label: '3.0 Letter Management' },
    { id: 'submission', label: '4.0 Submission Form' },
    { id: 'calendar', label: '5.0 Calendar Sync' }
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
            <span className="docs-tag">DOC_ID: OVG_RMS_RECORDS_SYSTEM</span>
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
            <span className="sidebar-sub">OVG Records Management System</span>
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
            {['Google Apps Script', 'Google Sheets', 'HTML', 'JavaScript', 'TAILWIND'].map(t => (
              <span key={t} className="sidebar-tech-tag">{t}</span>
            ))}
          </div>
        </aside>

        {/* ── Main Content Area ── */}
        <main className="docs-content">

          {/* Section 1: Overview */}
          <section id="overview" className="docs-section">
            <div className="docs-section-tag">Overview</div>
            <h1 className="docs-section-title">OVG Records Management System Overview</h1>
            <p className="docs-paragraph">
              This section is dedicated to a web application designed to centralize, track, and streamline communications for administrative workflows. It replaces traditional Excel logging with an automated structure to receive, categorize, and monitor official correspondences. Notably, the platform allows for online submissions—bridging the gap caused by municipal distances and ensuring seamless letter reception even when staff are out on fieldwork. Beyond reducing processing times and mitigating the risk of lost physical documents, the system features an analytical dashboard that automates information gathering and count reporting for IPCR tracking.
            </p>
          </section>

          {/* Section 2: Analytics Dashboard Insights (o1.png) */}
          <section id="analytics" className="docs-section">
            <div className="docs-section-tag">ANALYTICS_METRICS</div>
            <h2 className="docs-section-title">2.0 Analytics Dashboard Insights</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Upper filtering panel and visual metrics.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This module transforms raw tracking entries into structured graphical insights. It features an upper filtering panel that narrows data by Form Type, District, Year, and Period, alongside a primary "Export Count Report" utility to download official summary PDFs. The interface visualizes data patterns through a primary geographic bar chart tracking communication volume across municipalities supported by a bottom-left "Form Type Distribution" donut chart documenting total tracked records and a bottom-right "Letters per Month" grouped bar chart displaying monthly trends for Courtesy, Invitation, and Solicitation metrics.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveImage({ src: '/images/o1.png', alt: 'Analytics Dashboard Insights' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-rms.quezon.gov.ph/analytics</div>
                  </div>
                  <img src="/images/o1.png" alt="Analytics Dashboard Insights" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Letter Management & Client Tracking (o2.png) */}
          <section id="management" className="docs-section">
            <div className="docs-section-tag">CLIENT_TRACKING</div>
            <h2 className="docs-section-title">3.0 Letter Management & Client Tracking</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Centralized paginated data grid and custom inline tools.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This module provides system receivers with a centralized, paginated data grid to track live records and efficiently manage follow-up calls with clients. The table organizes critical operational data across structured columns—including Date Received, Time Received, Sender/Organization Source, Receiver Identity, Event/Request Details, Date of Event, and Requestor Name—equipped with responsive inline action tools allowing users to dynamically modify approval remarks via dropdown selectors, manage custom pop-up annotations with dedicated note-viewing actions, and instantly remove obsolete entries.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveImage({ src: '/images/o2.png', alt: 'Letter Management & Client Tracking' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-rms.quezon.gov.ph/letter-management</div>
                  </div>
                  <img src="/images/o2.png" alt="Letter Management & Client Tracking" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Dynamic Letter Submission Form (o3.png) */}
          <section id="submission" className="docs-section">
            <div className="docs-section-tag">SUBMISSION_PORTAL</div>
            <h2 className="docs-section-title">4.0 Dynamic Letter Submission Form</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Single-column submission workflow and data validation.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  The digital submission portal uses a simple, single-column process that allows users to easily enter important document information. It supports different types of communication, such as Solicitation Letters, Invitations, Combined Requests, and Courtesy Calls. The system requires users to complete and validate key details, including the date and time received, intake operator, sender, event information, target districts, and requestor designation. This ensures that all records are complete, accurate, and consistent before they are saved to the database.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveImage({ src: '/images/o3.png', alt: 'Dynamic Letter Submission Form' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-rms.quezon.gov.ph/submit</div>
                  </div>
                  <img src="/images/o3.png" alt="Dynamic Letter Submission Form" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Calendar Synchronization & Proximity Monitoring (o4.png) */}
          <section id="calendar" className="docs-section">
            <div className="docs-section-tag">CALENDAR_SYNCHRONIZATION</div>
            <h2 className="docs-section-title">5.0 Calendar Synchronization & Proximity Monitoring</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Color-coded monthly interface and schedule monitoring.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This grid view automatically maps out every valid submission event date onto a fluid monthly interface, allowing administrative offices to evaluate incoming requests and instantly spot scheduling adjacencies or logistical overlaps. Events are organized through an explicit color-coded indicator system tracking distinct statuses—mapping out Pending files in Blue, Approved dates in Green, Disapproved events in Red, For Reporting timelines in Purple, Unavailable slots in Yellow, and Cross-Office Coordination schedules in Orange—to provide comprehensive situational awareness at a glance.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveImage({ src: '/images/o4.png', alt: 'Calendar Synchronization & Proximity Monitoring' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://ovg-rms.quezon.gov.ph/calendar</div>
                  </div>
                  <img src="/images/o4.png" alt="Calendar Synchronization & Proximity Monitoring" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setActiveImage(null)} aria-label="Close image">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={activeImage.src} alt={activeImage.alt} className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OVGCulturalDocs;
