import profile from "../config/profile";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, error: "" });

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Fallback: if EmailJS is not configured, use a mailto link so the user can send directly
    if (!serviceId || !templateId || !publicKey) {
      try {
        const to = "imalshaanupamal@gmail.com";
        const subject = encodeURIComponent(form.subject || `Message from ${form.name || "Visitor"}`);
        const bodyLines = [
          form.message,
          "",
          `From: ${form.name || "Anonymous"}`,
          `Reply-To: ${form.email}`,
        ];
        const body = encodeURIComponent(bodyLines.join("\n"));
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setStatus({ sending: false, ok: true, error: "" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        setStatus({ sending: false, ok: false, error: "Could not open your email client." });
      }
      return;
    }

    try {
      const params = {
        from_name: form.name,
        reply_to: form.email, // sender's email (for Reply)
        to_email: "imalshaanupamal@gmail.com", // ALWAYS send to owner
        subject: form.subject,
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, params, { publicKey });

      setStatus({ sending: false, ok: true, error: "" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err?.text || err?.message || "Failed to send email" });
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me!</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>If you want to collaborate or have a question, feel free to reach out.</p>
          <ul className="contact-list">
            {profile.email && (
              <li>
                <strong>Email:</strong> 
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            )}
            {profile.phone && (
              <li>
                <strong>Phone:</strong> {profile.phone}
              </li>
            )}
            {profile.location && (
              <li>
                <strong>Location:</strong> {profile.location}
              </li>
            )}
            {profile.social?.github && (
              <li>
                <strong>GitHub:</strong> 
                <a href={profile.social.github} target="_blank" rel="noreferrer">
                  {profile.social.github}
                </a>
              </li>
            )}
            {profile.social?.linkedin && (
              <li>
                <strong>LinkedIn:</strong> 
                <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                  {profile.social.linkedin}
                </a>
              </li>
            )}
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;


