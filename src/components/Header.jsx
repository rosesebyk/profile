import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ name }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="logo" onClick={close}>{name}</Link>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="ulink talk">Let's talk ↗</Link>
      </div>
    </header>
  );
}
