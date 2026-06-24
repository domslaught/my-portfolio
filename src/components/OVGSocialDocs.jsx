import { useEffect, useState } from 'react';
import './OVGSocialDocs.css';

const OVGSocialDocs = ({ onBack }) => {
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
    { id: 'client-intake', label: '2.0 Client Intake & Form' },
    { id: 'tracker-referral', label: '3.0 Tracker & Referral System' },
    { id: 'report-generation', label: '4.0 Report Generation' },
    { id: 'medicine-inventory', label: '5.0 Medicine Inventory' }
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
            <span className="docs-tag">DOC_ID: OVG_SOCIAL_SERVICES_SYS</span>
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
            <span className="sidebar-sub">Social Services System</span>
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

          {/* Section 1: System Overview */}
          <section id="overview" className="docs-section">
            <div className="docs-section-tag">System Overview</div>
            <h1 className="docs-section-title">Social Assistance Management System (SAMS)</h1>
            <p className="docs-paragraph">
              The Social Assistance Management System (SAMS) is a digitalized solution developed for the Office of the Vice Governor of Quezon. It optimizes, tracks, and reports social and medical assistance requests efficiently across regional municipalities. By transitioning traditional hand-written ledgers and physical casework folders to a unified digital architecture, SAMS speeds up processing pipelines, mitigates tracking errors, and establishes transparent records. The platform enables administrators to instantly verify claimant histories, manage live medicine stocks, and automate compliance reporting.
            </p>
          </section>

          {/* Section 2: Client Intake & Assistance Form */}
          <section id="client-intake" className="docs-section">
            <div className="docs-section-tag">DATA_COLLECTION</div>
            <h2 className="docs-section-title">2.0 Client Assistance Form</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Structured client profiling and dynamic inventory-linked fields.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This interface automates data collection during beneficiary profiling. The system gathers critical patient demographics (Name, Birthday, Age, Address) along with claimant details to verify eligibility. Designed to reduce operator data entry errors, the form fields update dynamically based on the chosen "Assistance Needed" type. When medical aid is selected, the list of available items and active stock levels is pulled directly from the live Medicine Inventory, preventing staff from promising unavailable pharmaceuticals.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/v1.png', alt: 'Client Intake & Assistance Form' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://sams.quezon.gov.ph/client-intake</div>
                  </div>
                  <img src="/images/v1.png" alt="Client Intake & Assistance Form" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Assistance Tracker & Referral System */}
          <section id="tracker-referral" className="docs-section">
            <div className="docs-section-tag">CASE_LEDGER</div>
            <h2 className="docs-section-title">3.0 Assistance Tracker & Referral System</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Centralized database ledger and nested referral sub-system.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This view serves as the central records database ledger containing all historical social assistance requests. To handle complex cases, it implements a nested referral sub-system. Staff can use the "Add Referral" tool to link multiple partner agency assistance lines (such as DSWD, PCSO, or local hospitals) to a single client case file. The system automatically computes and displays live summary cards tracking the <strong>Amount Needed</strong>, <strong>Total Received (via Referrals)</strong>, and the remaining outstanding <strong>Balance</strong> to ensure complete transparency before disbursing extra funds.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/v2.png', alt: 'Assistance Tracker & Referral System' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://sams.quezon.gov.ph/tracker</div>
                  </div>
                  <img src="/images/v2.png" alt="Assistance Tracker & Referral System" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Financial & IPCR Report Generation */}
          <section id="report-generation" className="docs-section">
            <div className="docs-section-tag">COMPLIANCE_REPORTS</div>
            <h2 className="docs-section-title">4.0 Financial & IPCR Report Generation</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Filter-driven configuration workspace and automated report compilation.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This workspace automates the generation of verified financial and operational reports. Rather than tallying figures manually, staff use simple filter parameters (Monthly/Quarterly/Annually, Month, Year) to isolate records. The engine then auto-generates official performance and expenditure summaries designed to fulfill IPCR (Individual Performance Commitment and Review) target compliance reporting. Compiled documents are ready for immediate validation and printing.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/v3.png', alt: 'Financial & IPCR Report Generation' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://sams.quezon.gov.ph/report-generator</div>
                  </div>
                  <img src="/images/v3.png" alt="Financial & IPCR Report Generation" className="docs-screenshot" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Medicine Inventory Management */}
          <section id="medicine-inventory" className="docs-section">
            <div className="docs-section-tag">INVENTORY_CONTROL</div>
            <h2 className="docs-section-title">5.0 Medicine Inventory Management</h2>
            <div className="docs-grid-layout">
              <div className="docs-text-block">
                <div className="docs-meta-subtitle">THE FEATURE</div>
                <p className="docs-paragraph text-highlight">
                  Stock control CRUD operations and real-time form synchronizations.
                </p>
                <div className="docs-meta-subtitle">THE IMPACT</div>
                <p className="docs-paragraph">
                  This interface provides full stockroom control through a simplified CRUD (Create, Read, Update, Delete) module. Staff track active inventories by adding item names, descriptions, and current stock quantities. Because the system is unified, any adjustments made to quantities or additions of new medicines instantly and dynamically populate the selection dropdowns inside the Client Assistance Form (Section 2), ensuring that data is synchronized across the whole application.
                </p>
              </div>
              <div className="docs-image-block">
                <div className="docs-browser-mock" onClick={() => setActiveLightbox({ src: '/images/v4.png', alt: 'Medicine Inventory Management' })}>
                  <div className="mock-chrome-header">
                    <div className="mock-dots"><span /><span /><span /></div>
                    <div className="mock-url">https://sams.quezon.gov.ph/inventory</div>
                  </div>
                  <img src="/images/v4.png" alt="Medicine Inventory Management" className="docs-screenshot" />
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

export default OVGSocialDocs;

