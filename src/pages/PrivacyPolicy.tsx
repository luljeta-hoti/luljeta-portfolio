
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <Navbar />

      <div className="privacy-back">
  <a href="/">← Back to homepage</a>
</div>

      <section className="privacy-section">
        <Reveal direction="up">
          <div className="section-eyebrow">
            <span></span>
            LEGAL INFORMATION
          </div>

          <div className="privacy-heading">
            <h1>
              Privacy <span>Policy.</span>
            </h1>

            <p>
              Information about how this website handles personal data
              and protects your privacy.
            </p>

            <div className="privacy-updated">
              <span>LAST UPDATED</span>
              <time dateTime="2026-11-05">5 November 2026</time>
            </div>
          </div>
        </Reveal>

        <div className="privacy-content">
          <Reveal direction="up" delay={0.1}>
            <article className="privacy-block">
              <span className="privacy-number">01</span>
              <div>
                <h2>Introduction</h2>
                <p>
                  This Privacy Policy explains how Luljeta Hoti
                  handles personal information when you visit this
                  portfolio website or contact me through the details
                  provided on it.
                </p>
                <p>
                  This website is a personal portfolio intended to
                  present projects, technical skills and professional
                  information.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <article className="privacy-block">
              <span className="privacy-number">02</span>
              <div>
                <h2>Information you provide</h2>
                <p>
                  This website does not currently contain a contact
                  form or user account system. If you contact me by
                  email, I may receive personal information such as
                  your name, email address and the contents of your
                  message.
                </p>
                <p>
                  This information is used only to respond to your
                  inquiry or communicate with you. Please avoid
                  including sensitive personal information in your
                  message.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <article className="privacy-block">
              <span className="privacy-number">03</span>
              <div>
                <h2>Website hosting</h2>
                <p>
                  This website is intended to be hosted by Vercel.
                  When you visit the website, the hosting provider
                  may process technical information needed to deliver,
                  maintain and secure the website. This may include
                  your IP address, browser and device information,
                  request timestamps and technical logs.
                </p>
                <p>
                  This processing is subject to Vercel's own privacy
                  practices. You can read more in the{' '}
                  <a
                    href="https://vercel.com/legal/privacy-notice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vercel Privacy Notice ↗
                  </a>.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <article className="privacy-block">
              <span className="privacy-number">04</span>
              <div>
                <h2>Cookies and analytics</h2>
                <p>
                  This portfolio does not intentionally use
                  advertising cookies or third-party analytics tools.
                  However, technical cookies or similar technologies
                  may be used by the hosting provider or external
                  services where necessary for their operation.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <article className="privacy-block">
              <span className="privacy-number">05</span>
              <div>
                <h2>External websites</h2>
                <p>
                  This website contains links to external platforms,
                  including GitHub, LinkedIn and other websites.
                  When you follow these links, you leave this
                  portfolio. Those websites have their own privacy
                  policies and data-handling practices, which I do
                  not control.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <article className="privacy-block">
              <span className="privacy-number">06</span>
              <div>
                <h2>Data retention</h2>
                <p>
                  Emails and other information you voluntarily
                  provide are retained only for as long as reasonably
                  necessary to respond to your inquiry, maintain
                  relevant communication or meet applicable legal
                  obligations.
                </p>
                <p>
                  Technical information processed by the hosting
                  provider is subject to that provider's retention
                  practices.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <article className="privacy-block">
              <span className="privacy-number">07</span>
              <div>
                <h2>Your privacy rights</h2>
                <p>
                  Depending on applicable data protection law, you
                  may have the right to request access to, correction
                  or deletion of your personal data, or to exercise
                  other rights relating to its processing.
                </p>
                <p>
                  If you have a question or wish to make a privacy
                  request, you can contact me using the email address
                  below. You may also contact the{' '}
                  <a
                    href="https://aip.rks-gov.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Information and Privacy Agency of Kosovo ↗
                  </a>.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.45}>
            <article className="privacy-block">
              <span className="privacy-number">08</span>
              <div>
                <h2>Changes to this policy</h2>
                <p>
                  This Privacy Policy may be updated when the
                  website's features, services or data-handling
                  practices change. The latest revision date will
                  always be displayed at the top of this page.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div className="privacy-contact">
              <span>PRIVACY QUESTIONS</span>
              <h2>Need more information?</h2>
              <p>
                For questions about this Privacy Policy or the
                handling of personal information, you can contact me
                directly.
              </p>
              <a href="mailto:YOUR_EMAIL@example.com">
                YOUR_EMAIL@example.com <span>↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PrivacyPolicy
