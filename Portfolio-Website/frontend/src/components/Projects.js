import profile from "../config/profile";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {profile.projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-media" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="chip small">{t}</span>
                ))}
              </div>
              <div className="actions">
                {p.title === "Coconut Products E-commerce Website" ? (
                  <a className="btn primary" href="/projects/cocolanka">Live</a>
                ) : p.title === "Expenses Tracking App" ? (
                  <a className="btn primary" href="/projects/expenses">Live</a>
                ) : (
                  p.live && (
                    <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live</a>
                  )
                )}
                {p.source && (
                  <a className="btn" href={p.source} target="_blank" rel="noreferrer">Code</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
