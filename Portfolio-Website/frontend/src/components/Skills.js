import profile from "../config/profile";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {profile.skills.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-head">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="bar"><div className="fill" style={{ width: `${s.level}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;



