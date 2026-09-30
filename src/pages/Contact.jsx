import { useState } from "react";
import Section from "../components/Section";

const empty = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email, like name@example.com.";
  if (!v.phone.trim()) e.phone = "Enter your phone number.";
  else if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(v.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit mobile number.";
  if (!v.subject.trim()) e.subject = "Enter a subject.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleChange = (ev) => {
    setValues({ ...values, [ev.target.name]: ev.target.value });
    setStatus(null);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return setStatus("error");
    console.log("Enquiry:", values);
    setStatus("success");
    setValues(empty);
  };

  const field = (name, label, type = "text") => (
    <label className="field">
      {label}
      <input type={type} name={name} value={values[name]} onChange={handleChange} />
      {errors[name] && <span className="err">{errors[name]}</span>}
    </label>
  );

  return (
    <Section label="Contact" title="Contact me">
      <form className="form" onSubmit={handleSubmit} noValidate>
        {field("name", "Name")}
        {field("email", "Email", "email")}
        {field("phone", "Phone number", "tel")}
        {field("subject", "Subject")}
        <label className="field">
          Message
          <textarea name="message" rows="5" value={values.message} onChange={handleChange} />
          {errors.message && <span className="err">{errors.message}</span>}
        </label>
        <button className="btn" type="submit">Send message</button>
        {status === "success" && <p className="ok">Message sent. I'll reply soon.</p>}
        {status === "error" && <p className="err">Fix the highlighted fields and send again.</p>}
      </form>
    </Section>
  );
}
