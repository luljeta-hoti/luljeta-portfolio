
import './About.css'
import Reveal from './Reveal'

function About() {
  return (
    <section className="about-section" id="about">
      <Reveal direction="up">
        <div className="section-eyebrow">
          <span></span>
          A LITTLE ABOUT ME
        </div>
      </Reveal>

      <div className="about-layout">
        <Reveal direction="left" className="about-main">
          <h2>
            Beyond the code,
            <br />
            there's always <span>a problem</span>
            <br />
            worth solving.
          </h2>

          <p className="about-intro">
            I'm Luljeta Hoti, a Computer and Software Engineering
            student at the University of Prishtina.
          </p>

          <p className="about-description">
            I'm interested in understanding how software works,
            how different technologies come together, and how
            thoughtful engineering can turn ideas into practical
            solutions.
          </p>

          <p className="about-description">
            Through university projects and independent practice,
            I've explored application development, databases and
            web technologies. I'm still discovering where I want
            to specialize, and I enjoy the process of learning
            something new along the way.
          </p>
        </Reveal>

        <div className="about-side">
          <Reveal direction="right" delay={0.1}>
            <div className="about-card">
              <div className="about-card-label">
                <span>01</span>
                EDUCATION
              </div>

              <h3>Computer & Software Engineering</h3>

              <p>University of Prishtina</p>

              <span className="about-card-detail">
                Faculty of Electrical and Computer Engineering
              </span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.22}>
            <div className="about-card">
              <div className="about-card-label">
                <span>02</span>
                WHAT INTERESTS ME
              </div>

              <div className="interest-list">
                <span>Software Development</span>
                <span>Backend Engineering</span>
                <span>Databases & Data</span>
                <span>Security</span>
                <span>Artificial Intelligence</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.34}>
            <div className="about-card">
              <div className="about-card-label">
                <span>03</span>
                MY APPROACH
              </div>

              <h3>Learn by building.</h3>

              <p>
                Understand the problem, experiment with solutions,
                and improve through practice.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
