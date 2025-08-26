import profile from "../config/profile";
import "./About.css";

function About() {
  console.log('Profile avatar:', profile.avatar);
  console.log('Profile name:', profile.name);
  
  return (
    <section id="about" className="section">
      <h2>About <span style={{ color: "var(--primary)" }}>Me</span></h2>
      
      {/* Hero Introduction Card */}
      <div className="about-hero">
        <div className="hero-content">
          <h3>Hello, I'm {profile.name} 👋</h3>
          <p className="hero-description">{profile.about}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Get In Touch</a>
            {profile.resumeUrl && (
              <a
                className="btn"
                href={profile.resumeUrl}
                download="Imalsha-Beruwala-Resume.pdf"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="about-content">
        {/* Personal Details Card */}
        <div className="about-card personal-details">
          <div className="card-header">
            <h3>📍 Personal Details</h3>
          </div>
          <div className="card-content">
            <div className="detail-item">
              <span className="detail-icon">🏠</span>
              <div className="detail-text">
                <strong>Location:</strong> {profile.location}
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <div className="detail-text">
                <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            {profile.phone && (
              <div className="detail-item">
                <span className="detail-icon">📱</span>
                <div className="detail-text">
                  <strong>Phone:</strong> {profile.phone}
                </div>
              </div>
            )}
            {profile.website && (
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div className="detail-text">
                  <strong>LinkedIn:</strong> <a href={profile.website} target="_blank" rel="noreferrer">View Profile</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Education Card */}
        {profile.education?.length > 0 && (
          <div className="about-card education">
            <div className="card-header">
              <h3>🎓 Education</h3>
            </div>
            <div className="card-content">
              {profile.education.map((e, index) => (
                <div key={e.school + e.period} className="education-item">
                  <div className="education-degree">{e.degree}</div>
                  <div className="education-school">{e.school}</div>
                  <div className="education-period">{e.period}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Card */}
        <div className="about-card tech-stack-card">
          <div className="card-header">
            <h3>⚡ Technical Skills</h3>
          </div>
          <div className="card-content">
            <div className="tech-grid">
              {profile.techStack.map((tech) => (
                <span className="tech-chip" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        {profile.achievements?.length > 0 && (
          <div className="about-card achievements">
            <div className="card-header">
              <h3>🏆 Achievements</h3>
            </div>
            <div className="card-content">
              {profile.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-icon">✨</span>
                  <span className="achievement-text">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* References Card */}
        {profile.references?.length > 0 && (
          <div className="about-card references">
            <div className="card-header">
              <h3>📋 References</h3>
            </div>
            <div className="card-content">
              {profile.references.map((ref, index) => (
                <div key={index} className="reference-item">
                  <div className="reference-name">{ref.name}</div>
                  <div className="reference-position">{ref.position}</div>
                  <div className="reference-email">
                    <a href={`mailto:${ref.email}`}>{ref.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social Links Card */}
        <div className="about-card social-card">
          <div className="card-header">
            <h3>🔗 Connect With Me</h3>
          </div>
          <div className="card-content">
            <div className="social-grid">
              {profile.social?.github && (
                <a href={profile.social.github} target="_blank" rel="noreferrer" className="social-link github">
                  <span className="social-icon">📱</span>
                  <span>GitHub</span>
                </a>
              )}
              {profile.social?.linkedin && (
                <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="social-link linkedin">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
              )}
              {profile.social?.twitter && profile.social.twitter !== "" && (
                <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="social-link twitter">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
