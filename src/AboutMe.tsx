import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">Anakshiant</h2>
        <div className="paragon-title">
          <span>Principal Engineer</span>
          <a 
            href="https://www.useparagon.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="paragon-link"
          >
            <span>@Paragon</span>
          </a>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              I'm a passionate software developer with expertise in building scalable web applications 
              and mobile solutions. With a strong foundation in modern technologies, I specialize in 
              creating efficient, user-friendly applications that solve real-world problems.
            </p>
            <p>
              My journey in software development has been driven by curiosity and a commitment to 
              continuous learning. I enjoy working with cutting-edge technologies and am always 
              exploring new frameworks and tools to enhance my skill set.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 