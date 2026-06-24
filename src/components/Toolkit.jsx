import { useState } from 'react';
import './Toolkit.css';

const CATEGORIES = [
  { id: 'all', label: 'All Tech' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'automation', label: 'Automation & Tools' }
];

const SKILLS = [

  {
    name: 'Microsoft PowerPoint',
    category: 'automation',
    color: '#D24726',
    desc: 'Visual slide deck designer. Employed to create structural defense materials, system walkthrough presentations, and client consultation pitches.',
    useCase: 'Capstone thesis presentations, technical design slides, and user guide briefings',
    level: 'Advanced'
  },
  {
    name: 'JavaScript',
    category: 'languages',
    color: '#F7DF1E',
    desc: 'Core scripting and interactive logic. Leveraged to handle DOM routing, build custom hooks, and manage asynchronous communications.',
    useCase: 'Dynamic portfolio routing, asynchronous logic, interactive lightboxes',
    level: 'Advanced'
  },
  {
    name: 'Google Apps Script',
    category: 'automation',
    color: '#4285F4',
    desc: 'Serverless process automation engine. Used to interface spreadsheet files, run triggered routines, and auto-compile complex evaluation PDFs.',
    useCase: 'OVG Records Management System automation workflow, automatic PDF generator',
    level: 'Expert'
  },
  {
    name: 'React',
    category: 'frontend',
    color: '#61DAFB',
    desc: 'Component-driven UI library. Applied to design unified views, manage application state hooks, and compile highly interactive web apps.',
    useCase: 'Modular portfolio dashboard, dynamic document lightboxes',
    level: 'Advanced'
  },
  {
    name: 'Google Sheets',
    category: 'automation',
    color: '#34A853',
    desc: 'Cloud spreadsheet utility. Acting as a flexible, live database and administration interface for regional government systems.',
    useCase: 'Social Services System data repository and dashboard storage',
    level: 'Expert'
  },
  {
    name: 'PHP',
    category: 'languages',
    color: '#8892BE',
    desc: 'Backend server-side scripting. Responsible for database connectivity, secure submission forms, and administrative controls.',
    useCase: 'CEFI OSA MIS backend routing, API controllers, and query handling',
    level: 'Intermediate'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    color: '#38BDF8',
    desc: 'Utility-first style utility. Speeds up building fluid CSS structures while ensuring responsive UI layouts across all devices.',
    useCase: 'OVG social layout styling and clean administrative dashboards',
    level: 'Advanced'
  },
  {
    name: 'SQL & MySQL',
    category: 'backend',
    color: '#00758F',
    desc: 'Relational database query language and manager. Used to structure relational schemas, indexes, and fast transaction tables.',
    useCase: 'Student Portal database schema, activity logs, and system tables',
    level: 'Advanced'
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    color: '#7952B3',
    desc: 'Frontend design layout system. Ideal for rapid deployment of administration grids, forms, and core navigation mockups.',
    useCase: 'CEFI OSA portal layout grids and responsive tables',
    level: 'Intermediate'
  },
  {
    name: 'Microsoft Word',
    category: 'automation',
    color: '#2B579A',
    desc: 'Professional document processing. Utilized for composing project guidelines, writing capstone proposals, and formatting official correspondence documentation.',
    useCase: 'Detailed case studies, project reports, and system requirement manuals',
    level: 'Expert'
  },
  {
    name: 'Microsoft Excel',
    category: 'automation',
    color: '#217346',
    desc: 'Advanced data computation and analysis tool. Used for audits, data formatting, scheduling configurations, and generating initial mock databases.',
    useCase: 'Data structure planning, client data cleaning, and performance ratings verification',
    level: 'Advanced'
  },
];

const Toolkit = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section className="tk-section" id="toolkit-section">
      <div className="tk-header">
        <span className="section-label">Tech Stack</span>
        <h2 className="tk-title">The Toolkit</h2>
        <p className="tk-sub">
          Interactive view of technologies used to build production systems. Click or hover to explore.
        </p>
      </div>

      <div className="tk-container">
        {/* Left column: Context viewer card */}
        <div className="tk-detail-panel">
          {selectedSkill ? (
            <div className="tk-detail-card" style={{ '--skill-color': selectedSkill.color }}>
              <div className="tk-detail-header">
                <h3 className="tk-detail-title">{selectedSkill.name}</h3>
                <span className="tk-detail-level" style={{ '--skill-color': selectedSkill.color }}>
                  {selectedSkill.level}
                </span>
              </div>
              <p className="tk-detail-desc">{selectedSkill.desc}</p>

              <div className="tk-detail-meta">
                <div className="tk-meta-section">
                  <span className="tk-meta-label">KEY USE CASE:</span>
                  <span className="tk-meta-value">{selectedSkill.useCase}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="tk-detail-card empty">
              <p>Hover or click any technology on the right to view its details and implementation context.</p>
            </div>
          )}
        </div>

        {/* Right column: Categories and grid of tiles */}
        <div className="tk-grid-panel">
          <div className="tk-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tk-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="tk-skills-grid">
            {filteredSkills.map((skill) => (
              <button
                key={skill.name}
                className={`tk-skill-tile ${selectedSkill?.name === skill.name ? 'selected' : ''}`}
                style={{ '--brand-color': skill.color }}
                onMouseEnter={() => setSelectedSkill(skill)}
                onClick={() => setSelectedSkill(skill)}
              >
                <span className="tk-tile-indicator" />
                <span className="tk-tile-name">{skill.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
