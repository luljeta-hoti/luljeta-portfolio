
import './Hero.css'
import Reveal from './Reveal'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow"></div>

<div className="hero-trails" aria-hidden="true">
  <svg
    viewBox="0 0 1600 900"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="trailBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
        <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
      </linearGradient>

      <linearGradient id="trailViolet" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
        <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </linearGradient>

      <filter id="trailBlur">
        <feGaussianBlur stdDeviation="7" />
      </filter>
    </defs>

    {/* Soft background waves */}
    <g className="trail-glow" fill="none" filter="url(#trailBlur)">
      <path d="M-100 260 C250 100 400 470 760 300 S1250 120 1700 280" />
      <path d="M-100 570 C250 730 500 350 850 540 S1300 750 1700 470" />
      <path d="M-100 720 C300 550 500 820 900 650 S1350 490 1700 700" />
    </g>

    {/* Fine moving light trails */}
    <g className="trail-lines" fill="none">
      <path
        className="trail trail-one"
        d="M-100 260 C250 100 400 470 760 300 S1250 120 1700 280"
      />

      <path
        className="trail trail-two"
        d="M-100 570 C250 730 500 350 850 540 S1300 750 1700 470"
      />

      <path
        className="trail trail-three"
        d="M-100 720 C300 550 500 820 900 650 S1350 490 1700 700"
      />

      <path
        className="trail trail-four"
        d="M-100 420 C300 280 550 550 900 390 S1300 250 1700 410"
      />
    </g>
  </svg>
</div>

      <div className="hero-layout">
        <Reveal direction="left" className="hero-content">
          <div className="hero-intro">
            <span className="intro-line"></span>
            COMPUTER & SOFTWARE ENGINEERING STUDENT
          </div>

          
           

<h1 className="hero-heading">
  <span className="typing-line">
    {'Turning complex tasks'.split(' ').map((word, wordIndex, words) => {
      const startIndex =
        words.slice(0, wordIndex).join(' ').length +
        (wordIndex > 0 ? 1 : 0)

      return (
        <span className="typing-word" key={wordIndex}>
          {word.split('').map((char, charIndex) => (
            <span
              className="typing-char"
              key={charIndex}
              style={{
                animationDelay: `${(startIndex + charIndex) * 0.045}s`
              }}
            >
              {char}
            </span>
          ))}
        </span>
      )
    })}
  </span>

  <br />

  <span className="typing-line gradient-text">
    {'into simple applications.'.split(' ').map((word, wordIndex, words) => {
      const startIndex =
        words.slice(0, wordIndex).join(' ').length +
        (wordIndex > 0 ? 1 : 0)

      return (
        <span className="typing-word" key={wordIndex}>
          {word.split('').map((char, charIndex) => (
            <span
              className="typing-char"
              key={charIndex}
              style={{
                animationDelay: `${(21 + startIndex + charIndex) * 0.045}s`
              }}
            >
              {char}
            </span>
          ))}
        </span>
      )
    })}
  </span>
</h1>



          <p className="hero-description">
            I'm Luljeta Hoti, a Computer and Software Engineering student
            focused on software development. I create websites and applications
            designed to be functional, practical, and easy to use, making
            everyday tasks simpler through well-designed software.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              View my projects <span>↗</span>
            </a>

            <a href="/Luljeta-Hoti-CV.pdf" className="cv-button" download>
              Download CV <span>↓</span>
            </a>

            <a href="#contact" className="hero-contact-link">
              Get in touch <span>↗</span>
            </a>
          </div>

          <div className="hero-details">
            <div className="detail-item">
              <span className="detail-label">BASED IN</span>
              <span className="detail-value">Prishtina, Kosovo</span>
            </div>

            <div className="detail-divider"></div>

            <div className="detail-item">
              <span className="detail-label">UNIVERSITY</span>
              <span className="detail-value">University of Prishtina</span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="hero-visual">
          <div className="about-card">
            <div className="about-card-header">
              <div className="editor-dots">
                <span className="editor-dot red"></span>
                <span className="editor-dot yellow"></span>
                <span className="editor-dot green"></span>
              </div>

              <div className="editor-tab">
                <span className="file-icon">JS</span>
                about.js
              </div>

              <span className="editor-menu">•••</span>
            </div>

            <div className="about-card-body">
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-variable">luljeta</span> = {'{'}
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">2</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-property">role</span>:{' '}
                    <span className="code-string">
                      "Junior software engineer"
                    </span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">3</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-property">studying</span>:{' '}
                    <span className="code-string">
                      "Computer & Software Engineering"
                    </span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">4</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-property">languages</span>:{' '}
                    [<span className="code-string">"C++"</span>,{' '}
                    <span className="code-string">"C#"</span>,{' '}
                    <span className="code-string">"PHP"</span>,{' '}
                    <span className="code-string">"JavaScript"</span>],
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">5</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-property">builds</span>:{' '}
                    [<span className="code-string">"web apps"</span>,{' '}
                    <span className="code-string">"desktop apps"</span>,{' '}
                    <span className="code-string">"UI designs"</span>],
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">6</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-property">openTo</span>:{' '}
                    [<span className="code-string">"internships"</span>,{' '}
                    <span className="code-string">"remote junior roles"</span>],
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">7</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-property">location</span>:{' '}
                    <span className="code-string">"Kosovo"</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">8</span>
                  <span>{'};'}</span>
                </div>

                <div className="code-line code-empty">
                  <span className="line-number">9</span>
                </div>

                <div className="code-line">
                  <span className="line-number">10</span>
                  <span className="code-comment">
                    // ship it, then make it better
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">11</span>
                  <span>
                    <span className="code-keyword">export default</span>{' '}
                    <span className="code-variable">luljeta</span>;
                    <span className="code-cursor"></span>
                  </span>
                </div>
              </div>
            </div>

            <div className="about-card-footer">
              <div className="build-status">
                <span className="status-check">✓</span>
                Build passed
              </div>

              <div className="editor-status">
                <span>JavaScript</span>
                <span>UTF-8</span>
                <span>Ln 11</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
