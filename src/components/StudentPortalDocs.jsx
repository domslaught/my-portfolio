import { useEffect, useState } from 'react';
import './StudentPortalDocs.css';

const StudentPortalDocs = ({ onBack }) => {
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
    { id: 'overview', label: '1.0 Overview' },
    { id: 'calendar', label: '2.0 Centralized Calendar' },
    { id: 'checker', label: '3.0 Schedule Checker' },
    { id: 'form', label: '4.0 Proposal Form' },
    { id: 'inbox', label: '5.0 Proposal Inbox' },
    { id: 'analytics', label: '6.0 Analytics Dashboard' },
    { id: 'proposal-mgmt', label: '7.0 Proposal Management' },
    { id: 'schedule-mgmt', label: '8.0 Schedule Management' },
    { id: 'venue-mgmt', label: '9.0 Venue Management' },
    { id: 'user-mgmt', label: '10.0 User Management' }
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
            <span className="docs-tag">DOC_ID: CEFI_OSA_STUDENT_PORTAL</span>
            <span className="docs-status-dot" />
            <span className="docs-status-text">OFFICIAL_CASE_STUDY</span>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        {/* ── Sidebar Navigation ── */}
        <aside className="docs-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">CAPSTONE PROJECT</span>
            <span className="sidebar-sub">CEFI OSA MIS</span>
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
        </aside>

        {/* ── Main Content Area ── */}
        <main className="docs-content">

          {/* Section 1: Overview */}
          <section id="overview" className="docs-section">
            <div className="docs-section-tag">Overview</div>
            <h1 className="docs-section-title">Capstone Project: CEFI OSA Management Information System</h1>
            <p className="docs-paragraph">
              This web application replaces the slow, paper-based system students used to submit and track campus activity proposals, preventing manual mistakes, eliminating scheduling conflicts, and accelerating approvals for student organizations. By moving everything online, the system automatically routes proposals to the right evaluators and features a real-time analytics dashboard that aggregates post-activity evaluation forms to instantly measure event success and participant satisfaction.
            </p>
          </section>

          {/* Section 2: Centralized Activity Calendar (img1) */}
          <section id="calendar" className="docs-section">
            <div className="docs-section-tag">CALENDAR_INTERFACE</div>
            <h2 className="docs-section-title">2.0 Centralized Activity Calendar</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  A shared, interactive organizational calendar.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  Gives student leaders and organization heads real-time visibility into all proposed and approved campus events. By displaying exactly when and where activities are scheduled, proposers can easily see what else is planned, allowing them to adjust their dates and venues proactively before submitting a form. It also provides administrators with an instant snapshot of current campus happenings.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img1.png', alt: 'Centralized Activity Calendar' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/calendar</div>
                  </div>
                  <img src="/images/img1.png" alt="Centralized Activity Calendar" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Intelligent Schedule Checker (img2) */}
          <section id="checker" className="docs-section">
            <div className="docs-section-tag">CONFLICT_DETECTION</div>
            <h2 className="docs-section-title">3.0 Schedule Checker</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Proposal conflict detection .
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This smart validation tool instantly checks if a proposed date and venue conflict with existing bookings, preventing avoidable rejections before submission. To give signatories full flexibility, the checker will not trigger a hard error if a conflict exists with a pending proposal; instead, it allows overlapping submissions so evaluators can actively compare competing requests and decide which organization to prioritize or cater to first.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img2.png', alt: 'Intelligent Schedule Checker' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/schedule-checker</div>
                  </div>
                  <img src="/images/img2.png" alt="Intelligent Schedule Checker" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Smart Digital Proposal Form (img3) */}
          <section id="form" className="docs-section">
            <div className="docs-section-tag">DIGITAL_PROPOSAL_FORM</div>
            <h2 className="docs-section-title">4.0 Proposal Form</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Dynamic digitalized activity proposal form.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  Replaces the tedious, manual paper-based paperwork. The form features an automated routing system that instantly populates the correct required signatories depending on the specific type of activity being proposed—significantly reducing the time and confusion students face when figuring out who needs to sign their documents.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img3.png', alt: 'Smart Digital Proposal Form' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/proposal-new</div>
                  </div>
                  <img src="/images/img3.png" alt="Smart Digital Proposal Form" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Interactive Proposal Inbox & Controls (img4) */}
          <section id="inbox" className="docs-section">
            <div className="docs-section-tag">INBOX_AND_SECURITY</div>
            <h2 className="docs-section-title">5.0 Interactive Proposal Inbox & Controls</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Centralized tracking hub with document security.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  A dedicated dashboard where students can view, track, archive, or print their active proposals. For security, the "Edit" button automatically locks the moment the signing process begins to prevent unauthorized changes. Once fully approved, it generates a unique QR code linking directly to the activity’s evaluation form.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img4.png', alt: 'Interactive Proposal Inbox' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/inbox</div>
                  </div>
                  <img src="/images/img4.png" alt="Interactive Proposal Inbox" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Operational Analytics Dashboard (img5 & img6) */}
          <section id="analytics" className="docs-section">
            <div className="docs-section-tag">ANALYTICS_METRICS</div>
            <h2 className="docs-section-title">6.0 Operational Analytics Dashboard</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Data visualization and metrics.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This analytics dashboard converts raw attendee evaluation forms into clear, structured insights regarding the real-time impact of each campus activity. By tracking participant satisfaction and event success metrics, the system gives student organizations and administrators data-driven insights to measure program value, ultimately ranking activities from highest to lowest impact to highlight which initiatives performed the best.
                </p>
              </div>
              <div className="docs-image-block stack-images">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img5.png', alt: 'Operational Analytics Status' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/analytics-status</div>
                  </div>
                  <img src="/images/img5.png" alt="Operational Analytics Status" className="docs-screenshot" />
                </div>
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img6.png', alt: 'Operational Analytics Trends' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/analytics-trends</div>
                  </div>
                  <img src="/images/img6.png" alt="Operational Analytics Trends" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Proposal Management & Analytics Insights (img7 & img11) */}
          <section id="proposal-mgmt" className="docs-section">
            <div className="docs-section-tag">PROPOSAL_MANAGEMENT_AND_ANALYTICS</div>
            <h2 className="docs-section-title">7.0 Proposal Management & Analytics Insights</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Real-time KPI metrics, signatory logs, and reviews.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This interface provides signatories with the KPIs and insights necessary to manage proposals, featuring dynamic metric cards that track real-time proposal statuses, processing bottlenecks, and approval velocities. It also contains a dedicated proposal review section complete with an interactive comment area for requesting changes, alongside a chronological tracking log that displays which signatories have already signed off and who needs to review it next.
                </p>
              </div>
              <div className="docs-image-block stack-images">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img7.png', alt: 'Proposal Management Dashboard' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/proposal-management</div>
                  </div>
                  <img src="/images/img7.png" alt="Proposal Management Dashboard" className="docs-screenshot" />
                </div>
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img11.png', alt: 'Analytics Insights' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/analytics-insights</div>
                  </div>
                  <img src="/images/img11.png" alt="Analytics Insights" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Schedule Management (img8) */}
          <section id="schedule-mgmt" className="docs-section">
            <div className="docs-section-tag">SCHEDULE_MANAGEMENT</div>
            <h2 className="docs-section-title">8.0 Schedule Management</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Adaptive date adjustments and disruption handling.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  It displays all active or approved proposals in a clean data table, giving administrators the explicit capability to adjust event dates. This feature is designed to handle sudden real-world disruptions like severe storms, unexpected campus events, or logistical delays, allowing administrators to safely reschedule active timelines without breaking the system.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img8.png', alt: 'Schedule Management' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/schedule-management</div>
                  </div>
                  <img src="/images/img8.png" alt="Schedule Management" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Venue Management (img9) */}
          <section id="venue-mgmt" className="docs-section">
            <div className="docs-section-tag">VENUE_MANAGEMENT</div>
            <h2 className="docs-section-title">9.0 Venue Management</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Administrative control panel and dynamic location sync.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This is an administrative control panel that handles standard add, edit, and delete operations for all campus facilities. Any modifications made here will automatically and dynamically update the available location options inside the student organization's proposal submission form.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img9.png', alt: 'Venue Management' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/venue-management</div>
                  </div>
                  <img src="/images/img9.png" alt="Venue Management" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: User Management (img10) */}
          <section id="user-mgmt" className="docs-section">
            <div className="docs-section-tag">USER_MANAGEMENT</div>
            <h2 className="docs-section-title">10.0 User Management</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Account provisioning, access toggle, and role metrics.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This module allows administrators to create new accounts and immediately toggle their status between enabled and disabled to control system access. To provide a clear overview of the platform's user base, it includes a visual distribution graph breaking down total users by their specific roles, such as signatories, administrators, individual students, and student organizations.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/img10.png', alt: 'User Management' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://cefi-osa.edu.ph/user-management</div>
                  </div>
                  <img src="/images/img10.png" alt="User Management" className="docs-screenshot" />
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

export default StudentPortalDocs;
