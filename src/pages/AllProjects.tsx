
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { sortedProjects } from '../components/Projects'
import '../components/Projects.css'

function AllProjects() {
  return (
    <main>
      <Navbar />

      <section className="projects-section">
        <Reveal className="projects-heading">
          <div className="section-eyebrow">
            <span></span>
            PROJECT ARCHIVE
          </div>

          <div className="projects-title-row">
            <div>
              <h2>
                All my <span>projects.</span>
              </h2>
              <p>
                A collection of projects I've worked on, exploring
                different technologies, ideas and approaches to development.
              </p>
            </div>

            <div className="projects-count">
              <span>{String(sortedProjects.length).padStart(2, '0')}</span>
              <small>TOTAL PROJECTS</small>
            </div>
          </div>
        </Reveal>

        <div className="projects-grid">
          {sortedProjects.map((project, index) => {
            const number = String(index + 1).padStart(2, '0')

            return (
              <Reveal key={project.slug} delay={(index % 3) * 0.12}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="project-card-link"
                  aria-label={`View ${project.name} project`}
                >
                  <article className={`project-card ${project.className}`}>
                    <div className="project-visual">
                      {project.visual}
                      <span className="project-visual-number">
                        PROJECT / {number}
                      </span>
                    </div>

                    <div className="project-info">
                      <div className="project-meta">
                        <span>{project.type}</span>
                        <span>{project.dateLabel}</span>
                      </div>

                      <div className="project-name-row">
                        <h3>{project.name}</h3>
                      </div>

                      <p>{project.description}</p>

                      <div className="project-tech">
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>

                      <span className="project-view-link">
                        View project <span>↗</span>
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <div className="all-projects-back">
          <Link to="/">← Back to homepage</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AllProjects
