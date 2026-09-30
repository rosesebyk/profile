export default function ProjectCard({ title, text, tech }) {
  return (
    <article className="card">
      <div className="tile">{tech[0]}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tags">{tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
    </article>
  );
}
