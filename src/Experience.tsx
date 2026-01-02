import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Principal Engineer",
      company: "Paragon",
      period: "2025 - Present"
    },
    {
      title: "Solution Architect",
      company: "Paragon",
      period: "2023 - 2025"
    },
    {
      title: "Technical Lead",
      company: "Paragon",
      period: "2022 - 2023"
    },
    {
      title: "Solution Architect",
      company: "ThinkSys Inc",
      period: "2021 - 2025"
    },
    {
      title: "Software Engineer",
      company: "ThinkSys Inc",
      period: "2017 - 2021"
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">{exp.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 