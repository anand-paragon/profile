import React from 'react';

const Skills: React.FC = () => {
  const allSkills = [
    "Javascript", "Typescript", "C#", "PHP",
    ".Net Core", "Nest Js", "Next Js", "ReactJs", "Express",
    "Docker", "Kubernetes", "Terraform", "Github Actions", "ArgoCD",
    "PostgreSQL", "Kafka", "Redis", "AWS", "Grafana", "Prometheus"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {allSkills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 