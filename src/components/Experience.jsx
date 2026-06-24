import React from 'react';

import './Experience.css';



const WORK = [

  {

    year: '2026',

    role: 'GO-STAN',

    org: 'Sangguniang Panlalawigan of Quezon · Office of the Vice Governor',

    period: 'Feb – May 2026',

    items: [

      'Designed an automated correspondence & evaluation engine to compile employee IPCR reports from raw Sheets data.',

      'Built a self-archiving directory controller that moves aged files to year-labelled folders on fiscal rollover.',

      'Eliminated 3+ hours of manual PDF compilation per evaluation cycle.',

    ],

  },

  {

    year: '2025',

    role: 'Government Intern',

    org: 'Sangguniang Panlalawigan of Quezon · Office of the Vice Governor',

    period: 'Sept – Dec 2025',

    items: [

      'Developed the OVG Social Assistance & Records Tracker — three sub-systems covering medical, burial, and financial aid.',

      'Integrated real-time Apps Script triggers replacing hand-written log books.',

      'Deployed an analytics dashboard providing operational visibility to administrators.',

    ],

  },

  {

    year: '2025',

    role: 'OJT Developer',

    org: 'WhiteWolf Computers',

    period: 'Jan – Mar 2025',

    items: [

      'Assisted in hardware diagnostics, system setups, and local network configuration.',

      'Maintained and optimised inventory tracking spreadsheets and admin software.',

    ],

  },

];



const EDUCATION = [

  {

    year: '2025',

    degree: 'BS Information Systems',

    school: 'Calayan Educational Foundation Inc.',

    period: '2021 – 2025',

    awards: ['Best in Research Award', 'UI & UX Excellence Award'],

    items: [

      'Capstone: CEFI OSA Management Information System — a full-stack web platform for activity proposal workflows.',

      'Focus areas: systems analysis, web application development, database management.',

    ],

  },

  {

    year: '2021',

    degree: 'Senior High School — ABM Strand',

    school: 'Calayan Educational Foundation Inc.',

    period: '2019 – 2021',

    awards: ['Graduated with Honor'],

    items: ['Accountancy, Business, and Management specialisation.'],

  },

];



const TimelineEntry = ({ year, role, org, degree, school, period, items, awards }) => (

  <div className="tl-entry">

    <div className="tl-year-col">

      <span className="tl-year">{year}</span>

      <div className="tl-connector" />

    </div>

    <div className="tl-card">

      <div className="tl-card-header">

        <div>

          <h3 className="tl-role">{role || degree}</h3>

          <span className="tl-org">{org || school}</span>

        </div>

        <span className="tl-period">{period}</span>

      </div>



      {awards && awards.length > 0 && (

        <div className="tl-awards">

          {awards.map((a) => (

            <span key={a} className="tl-award-badge">

              <span className="award-dot" />

              {a}

            </span>

          ))}

        </div>

      )}



      <ul className="tl-items">

        {items.map((item, i) => <li key={i}>{item}</li>)}

      </ul>

    </div>

  </div>

);



const Experience = () => (

  <section className="exp-section" id="experience-section">

    <div className="exp-container">

      <div className="exp-header">

        <span className="section-label">Background</span>

        <h2 className="exp-title">Experience & Education</h2>

        <p className="exp-sub">Professional timeline and academic foundation</p>

      </div>



      <div className="exp-cols">

        {/* Work column */}

        <div className="exp-col">

          <div className="col-label">Work Experience</div>

          <div className="tl-track">

            {WORK.map((w, i) => <TimelineEntry key={i} {...w} />)}

          </div>

        </div>



        {/* Education column */}

        <div className="exp-col">

          <div className="col-label">Education</div>

          <div className="tl-track">

            {EDUCATION.map((e, i) => <TimelineEntry key={i} {...e} />)}

          </div>

        </div>

      </div>

    </div>

  </section>

);



export default Experience;

