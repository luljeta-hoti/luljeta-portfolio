
import './Contact.css'
import Reveal from './Reveal'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Reveal direction="up">
        <div className="section-eyebrow">
          <span></span>
          CONTACT
        </div>
      </Reveal>

      <div className="contact-content">
        <Reveal direction="left" className="contact-heading">
          <h2>
            Get in touch<span>.</span>
          </h2>

          <p>
            For inquiries, professional opportunities or questions
            about my work, you can reach me through the contact
            details below.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="contact-button"
          >
            Send an email <span>↗</span>
          </a>
        </Reveal>

        <Reveal direction="right" delay={0.15} className="contact-details">
          <div className="contact-detail-block">
            <span className="contact-label">EMAIL</span>
            <a href="mailto:lulehoti17@gmail.com">
              lulehoti17@gmail.com
            </a>
          </div>

          <div className="contact-detail-block">
            <span className="contact-label">GITHUB</span>
            <a
              href="https://github.com/luljeta-hoti"
              target="_blank"
              rel="noreferrer"
            >
            GitHub <span className="contact-arrow">↗</span>
            </a>
          </div>

          <div className="contact-detail-block">
            <span className="contact-label">LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/luljetahoti/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span className="contact-arrow">↗</span>
            </a>
          </div>

          <div className="contact-detail-block">
            <span className="contact-label">LOCATION</span>
            <p>Prishtina, Kosovo</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
