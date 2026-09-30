import Section from "../components/Section";
import { owner, skills, education, experience, certifications, achievements, goals } from "../data";

const Row = ({ title, place, year, text, tags }) => (
  <div className="xrow">
    <div><h3>{title}, {place}</h3><small>{year}</small></div>
    {text && <p>{text}</p>}
    {tags && <div className="tags">{tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>}
  </div>
);

export default function About() {
  return (
    <>
      <Section label="About" title="About me">
        <p className="lead">{owner.intro} I enjoy hackathons, robotics and leading technical documentation for campus events.</p>
      </Section>
      <Section label="Education" title="Education">{education.map((e) => <Row key={e.title} {...e} />)}</Section>
      <Section label="Skills" title="Technical skills">
        <div className="tags big">{skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
      </Section>
      <Section label="Experience" title="Work experience">{experience.map((e) => <Row key={e.title} {...e} />)}</Section>
      <Section label="Certifications" title="Certifications"><ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul></Section>
      <Section label="Achievements" title="Achievements"><ul>{achievements.map((a) => <li key={a}>{a}</li>)}</ul></Section>
      <Section label="Goals" title="Career interests and goals"><p className="lead">{goals}</p></Section>
    </>
  );
}
