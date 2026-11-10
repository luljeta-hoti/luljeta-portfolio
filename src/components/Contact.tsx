
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
    Whether you have a question about my work, would like to
    discuss a project, or are reaching out about a professional
    opportunity, I'd be glad to hear from you.
  </p>

  <p className="contact-secondary-text">
    Feel free to reach out directly using any of the contact
    details here.
  </p>
</Reveal>


        <Reveal
          direction="right"
          delay={0.15}
          className="contact-details"
        >
          <a
            href="mailto:lulehoti17@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon email-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>

            <div className="contact-card-info">
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">
                lulehoti17@gmail.com
              </span>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://github.com/luljeta-hoti"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon github-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 1.67 3.02 2.1.1-.72.4-1.2.72-1.48-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.08 5.48.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </div>

            <div className="contact-card-info">
              <span className="contact-label">GITHUB</span>
              <span className="contact-value">
                github.com/luljeta-hoti
              </span>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/luljetahoti/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon linkedin-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44ZM19.04 18.5h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.7H9.79V9h2.85v1.3h.04c.4-.75 1.37-1.53 2.82-1.53 3.01 0 3.56 1.98 3.56 4.55v5.18Z" />
              </svg>
            </div>

            <div className="contact-card-info">
              <span className="contact-label">LINKEDIN</span>
              <span className="contact-value">
                linkedin.com/in/luljetahoti
              </span>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <div className="contact-location">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.3" />
            </svg>
            Prishtina, Kosovo
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
