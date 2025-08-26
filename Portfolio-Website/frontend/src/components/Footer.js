import profile from "../config/profile";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <div className="social">
          {profile.social?.github && (
            <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {profile.social?.linkedin && (
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {profile.social?.twitter && profile.social.twitter !== "" && (
            <a href={profile.social.twitter} target="_blank" rel="noreferrer">Twitter</a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;



