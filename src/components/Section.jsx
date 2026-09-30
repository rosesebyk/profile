export default function Section({ label, title, children }) {
  return (
    <section className="section">
      <div className="container">
        {label && <span className="pill"><i />{label}</span>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
