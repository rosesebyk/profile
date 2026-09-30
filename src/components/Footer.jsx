import { Link } from "react-router-dom";
import { owner } from "../data";

export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="container">
        <a className="mail" href={`mailto:${owner.email}`}>{owner.email}</a>
        <div className="foot-grid">
          <div><h3>{name}</h3><p>{owner.role}. I build secure, usable web apps.</p></div>
          <div><h4>Quick links</h4><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
          <div><h4>Contact</h4><p>{owner.phone}</p><p>{owner.email}</p><p>{owner.location}</p></div>
          <div><h4>Elsewhere</h4>
            <a href={owner.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
        <p className="copy">© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
