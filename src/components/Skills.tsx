
import './Skills.css'
import Reveal from './Reveal'

const certifications = [
  {
    name: 'PHP & MySQL',
    provider: 'ARRA Academy',
    date: 'March 2026',
  },
  {
    name: 'Front-End Development',
    provider: 'ARRA Academy',
    date: 'March 2026',
  },

  {
    name: 'Graphic Design',
    provider: 'ARRA Academy',
    date: 'February 2026',
  },

  {
    name: 'WordPress & Digital Marketing',
    provider: 'ARRA Academy',
    date: 'January 2026',
  },
  {
    name: 'Fundamentals of Java Programming',
    provider: 'OHES',
    date: 'February 2024',
  },
  
]
const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['C#', 'PHP', 'JavaScript', 'Java'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'WordPress'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL Server'],
  },
  {
    title: 'Tools & Design',
    skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Figma'],
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <Reveal direction="up">
        <div className="section-eyebrow">
          <span></span>
           CERTIFICATIONS & SKILLS 
        </div>
      </Reveal>

      {/* Main heading for both columns */}
      <Reveal direction="up" delay={0.1}>
        <div className="skills-heading">
          <h2>
            A foundation built through <span>learning.</span>
          </h2>

          <p>
            A combination of technical skills and additional training developed through university, personal projects and independent learning.
          </p>
        </div>
      </Reveal>

      <div className="skills-content">

        {/* LEFT COLUMN — CERTIFICATIONS */}
        <div className="certifications-column">
          <Reveal direction="up">
            <div className="column-heading">
              <h3>Certifications <span>& Training</span></h3>
            </div>
          </Reveal>

          <div className="certifications-list">
            {certifications.map((certification, index) => (
              <Reveal
                key={certification.name}
                direction="up"
                delay={index * 0.08}
              >
                <article className="certification-item">
                  <div className="certification-info">
                    <h4>{certification.name}</h4>
                    <span>{certification.provider}</span>
                  </div>

                  <span className="certification-date">
                    {certification.date}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — TECHNICAL SKILLS */}
        <div className="skills-column">
          <Reveal direction="up">
            <div className="column-heading">
              <h3>Technical <span>Skills</span></h3>
            </div>
          </Reveal>

          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                direction="up"
                delay={index * 0.08}
              >
                <div className="skill-row">
                  <h4>{group.title}</h4>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
