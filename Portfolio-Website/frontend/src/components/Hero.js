import profile from "../config/profile";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">{profile.role}</p>
          <h1>Hi, I'm Imalsha Anupamal</h1>
          <p className="muted">{profile.about}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Hire Me</a>
            <a href="#contact" className="btn">Let's Talk</a>
          </div>
          <div className="social-icons">
            {profile.social?.github && (
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            )}
            {profile.social?.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            )}
            {profile.social?.twitter && profile.social.twitter !== "" && (
              <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
        
        <div className="hero-image">
          {profile.avatar && (
            <img className="avatar" src={profile.avatar} alt={`${profile.name} portrait`} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;


