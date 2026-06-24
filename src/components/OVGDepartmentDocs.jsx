import { useEffect, useState } from 'react';
import './StudentPortalDocs.css';

const OVGDepartmentDocs = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    { id: 'overview',   label: '1.0 Overview' },
    { id: 'lifecycle',  label: '2.0 File Lifecycle Monitor' },
    { id: 'archiving',  label: '3.0 Auto-Archive Engine' },
    { id: 'reset',      label: '4.0 Directory Reset & Rebuild' },
    { id: 'triggers',   label: '5.0 Trigger Configuration' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="docs-viewport">
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
            <span className="docs-status-text">DEPLOYED</span>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">CASE STUDY</span>
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
            {['Google Apps Script', 'Google Sheets', 'Tailwind CSS', 'JavaScript'].map(t => (
              <span key={t} className="sidebar-tech-tag">{t}</span>
            ))}
          </div>
        </aside>

        <main className="docs-content">

          {/* Section 1 */}
          <section id="overview" className="docs-section">
            <div className="docs-section-tag">INTRODUCTION</div>
            <h1 className="docs-section-title">OVG Department System</h1>
            <p className="docs-paragraph">
              A fully automated document lifecycle and self-archiving system built for the internal operations of the Office of the Vice Governor of Quezon. As documents accumulated across Google Drive and Sheets over the years, the department had no structured process to retire old files. Directories became cluttered, staff wasted time searching through outdated records, and fiscal year rollovers required hours of manual cleanup. This system replaced that entire process with a scheduled, zero-intervention automation.
            </p>
            <div className="docs-stat-row">
              <div className="docs-stat-card">
                <span className="stat-value">0</span>
                <span className="stat-label">Manual Intervention Required</span>
              </div>
              <div className="docs-stat-card">
                <span className="stat-value">Auto</span>
                <span className="stat-label">Fiscal Year Rollover</span>
              </div>
              <div className="docs-stat-card">
                <span className="stat-value">100%</span>
                <span className="stat-label">File Traceability</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="lifecycle" className="docs-section">
            <div className="docs-section-tag">CORE_FEATURE</div>
            <h2 className="docs-section-title">2.0 File Lifecycle Monitor</h2>
            <div className="docs-feature-card">
              <div className="docs-meta-subtitle">THE FEATURE</div>
              <p className="docs-paragraph text-highlight">
                Automated scanning of file creation timestamps across all Sheets and Drive folders.
              </p>
              <div className="docs-meta-subtitle">THE IMPACT</div>
              <p className="docs-paragraph">
                A scheduled Apps Script routine scans every file in the department's designated Drive directory and compares its creation date against the current fiscal year threshold. Files that belong to a previous year are flagged automatically — no one needs to manually review folders or remember which records are due for archiving. The system maintains an internal audit log of every flagged file, giving administrators a transparent record of what will be moved before the archive operation runs.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="feature-dot" />Scans all Sheets and Drive files on a set schedule
                </div>
                <div className="docs-feature-item">
                  <span className="feature-dot" />Timestamps compared against fiscal year boundary
                </div>
                <div className="docs-feature-item">
                  <span className="feature-dot" />Internal audit log updated before each archive run
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="archiving" className="docs-section">
            <div className="docs-section-tag">ARCHIVE_ENGINE</div>
            <h2 className="docs-section-title">3.0 Auto-Archive Engine</h2>
            <div className="docs-feature-card">
              <div className="docs-meta-subtitle">THE FEATURE</div>
              <p className="docs-paragraph text-highlight">
                Flagged records are automatically moved into year-labelled archive directories on fiscal rollover.
              </p>
              <div className="docs-meta-subtitle">THE IMPACT</div>
              <p className="docs-paragraph">
                When the archive trigger fires — either on a schedule or manually — the engine moves all flagged files from the active directory into a <code>/YYYY-Archive/</code> folder, creating the folder if it doesn't already exist. Files are never deleted; they remain fully accessible in their archive folder. This meant the department's active working directory stayed clean year-round without anyone needing to touch it.
              </p>
              <div className="docs-code-snippet">
                <div className="snippet-header">
                  <span>auto_archive.gs</span>
                  <span className="snippet-lang">Apps Script</span>
                </div>
                <pre className="snippet-body">{`function runArchiveCycle() {
  const root = DriveApp.getFolderById(ROOT_ID);
  const archiveFolder = getOrCreateFolder(
    root, \`\${getCurrentYear() - 1}-Archive\`
  );
  const files = root.getFiles();
  while (files.hasNext()) {
    const file = files.next();
    if (isPreviousFiscalYear(file.getDateCreated())) {
      archiveFolder.addFile(file);
      root.removeFile(file);
    }
  }
}`}</pre>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="reset" className="docs-section">
            <div className="docs-section-tag">DIRECTORY_RESET</div>
            <h2 className="docs-section-title">4.0 Directory Reset & Rebuild</h2>
            <div className="docs-feature-card">
              <div className="docs-meta-subtitle">THE FEATURE</div>
              <p className="docs-paragraph text-highlight">
                Active working directories are automatically rebuilt and reset for the new fiscal year.
              </p>
              <div className="docs-meta-subtitle">THE IMPACT</div>
              <p className="docs-paragraph">
                After the archive cycle completes, the system runs a directory rebuild pass — recreating the standard folder structure (Incoming, Outgoing, Pending, Reports) for the new year under a fresh <code>/Active-YYYY/</code> root. Staff return after the fiscal rollover to a clean, correctly structured workspace with zero setup effort. This replaced what used to be a manual process that took the team a full day to coordinate.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="feature-dot" />Standard folder tree rebuilt for new fiscal year
                </div>
                <div className="docs-feature-item">
                  <span className="feature-dot" />Old active directory retired to read-only archive state
                </div>
                <div className="docs-feature-item">
                  <span className="feature-dot" />Completion notification sent to department head
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="triggers" className="docs-section">
            <div className="docs-section-tag">CONFIGURATION</div>
            <h2 className="docs-section-title">5.0 Trigger Configuration</h2>
            <div className="docs-feature-card">
              <div className="docs-meta-subtitle">THE SETUP</div>
              <p className="docs-paragraph">
                The system uses Google Apps Script's time-based trigger system. The lifecycle monitor runs weekly. The archive engine runs once annually at the end of the fiscal year. Both can also be triggered manually by an admin through a lightweight Tailwind CSS control panel embedded in the Google Sheet — no terminal or developer access needed.
              </p>
              <div className="docs-pipeline-steps">
                <div className="docs-pipe-step">
                  <span className="pipe-node">W</span>
                  <div className="pipe-content">
                    <strong>Weekly Scan</strong>
                    <p>Lifecycle monitor flags outdated files every week automatically.</p>
                  </div>
                </div>
                <div className="docs-pipe-step">
                  <span className="pipe-node">Y</span>
                  <div className="pipe-content">
                    <strong>Annual Archive</strong>
                    <p>Archive engine runs on fiscal year boundary — moves and organizes all flagged files.</p>
                  </div>
                </div>
                <div className="docs-pipe-step">
                  <span className="pipe-node">M</span>
                  <div className="pipe-content">
                    <strong>Manual Override</strong>
                    <p>Admin panel lets staff trigger either operation on demand without touching code.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default OVGDepartmentDocs;
