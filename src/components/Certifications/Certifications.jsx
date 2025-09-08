import React from 'react';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    name: 'Preliminary English Test (PET)',
    issuer: 'Cambridge',
    link: 'https://drive.google.com/file/d/1pdRoOuelZTb_8TOyT5iQWsSAhyY87lI2/view?usp=drive_link'
  },
  {
    id: 2,
    name: 'Business English Certificate (BEC)',
    issuer: 'Cambridge',
    link: 'https://drive.google.com/file/d/1wGYN7Ip3ad_Kp7yizcSOm-ITVrxf_qmj/view?usp=drive_link'
  },
  {
    id: 3,
    name: 'Leadership & Team Effectiveness',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1RD0PeyHm_WyDSzJE-gmRND65C5g6SGZC/view?usp=drive_link'
  },
  {
    id: 4,
    name: 'E-Business',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1abcap7KW02zTrNsFpBQ3JuP_egj1b9lm/view?usp=drive_link'
  },
  {
    id: 5,
    name: ' Software Testing',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1HN--479BJk84oMvYJVxTwO_36X7MBguO/view?usp=drive_link'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-container">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div key={cert.id} className="certification-card">
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            {cert.link && (
              <a 
                href={cert.link} 
                className="view-certificate" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
