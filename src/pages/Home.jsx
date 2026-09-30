import { Link } from "react-router-dom";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { owner, stats, skills, projects } from "../data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="stats">
              {stats.map((s) => <div key={s.l}><b>+{s.n}</b><span>{s.l}</span></div>)}
            </div>
            <h1>Hello</h1>
            <p className="sub">It's {owner.name}, {owner.role.toLowerCase()}.</p>
            <p className="lead">{owner.intro}</p>
            <div className="btns">
              <a className="btn" href="#work">View my work</a>
              <Link className="btn ghost" to="/contact">Contact me</Link>
            </div>
          </div>
          <img className="photo" src={owner.photo} alt={`${owner.name}, profile`} />
        </div>
      </section>
      <Section label="Skills" title="Technical skills">
        <div className="tags big">{skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
      </Section>
      <div id="work">
        <Section label="Portfolio" title="Featured projects">
          <div className="grid">{projects.map((p) => <ProjectCard key={p.title} {...p} />)}</div>
        </Section>
      </div>
      <section className="container">
        <div className="cta">
          <h2>Got a vision? Let's bring it to life.</h2>
          <p>I'm open to new projects, internships and collaborations.</p>
          <Link className="btn light" to="/contact">Let's talk ↗</Link>
        </div>
      </section>
    </>
  );
}
