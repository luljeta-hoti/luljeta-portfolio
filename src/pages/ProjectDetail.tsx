
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { sortedProjects } from '../components/Projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()

  const project = sortedProjects.find(
    (item) => item.slug === slug
  )

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found | Luljeta Hoti</title>
          <meta
            name="robots"
            content="noindex, follow"
          />
        </Helmet>

        <Navbar />

        <main className="project-not-found">
          <p className="section-eyebrow">PROJECT NOT FOUND</p>
          <h1>This project doesn't exist.</h1>
          <Link to="/projects" className="project-back-link">
            ← Back to all projects
          </Link>
        </main>

        <Footer />
      </>
    )
  }

  const currentIndex = sortedProjects.findIndex(
    (item) => item.slug === slug
  )

  const pageTitle = `${project.name} | Luljeta Hoti Portfolio`

  const pageDescription = project.description

  const canonicalUrl = `https://luljeta-portfolio.vercel.app/projects/${project.slug}`

  const previousProject =
    currentIndex > 0
      ? sortedProjects[currentIndex - 1]
      : null

  const nextProject =
    currentIndex < sortedProjects.length - 1
      ? sortedProjects[currentIndex + 1]
      : null

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta name="author" content="Luljeta Hoti" />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta
          name="twitter:description"
          content={pageDescription}
        />
      </Helmet>

      <Navbar />

      <main className="project-detail-page">
        <Reveal direction="up">
          <Link to="/projects" className="project-back-link">
            ← Back to all projects
          </Link>

          <header className="project-detail-header">
            <p className="section-eyebrow">
              {project.type}
            </p>

            <h1>{project.name}</h1>

            <p className="project-detail-description">
              {project.description}
            </p>

            <div className="project-detail-meta">
              <span>{project.dateLabel}</span>
              <span>Personal Project</span>
            </div>
          </header>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className={`project-detail-image ${project.className}`}>
            <img
              src={project.image}
              alt={project.alt}
            />
          </div>
        </Reveal>

        <div className="project-detail-content">
          <div className="project-detail-main">

            <Reveal direction="up">
              <section className="detail-section">
                <p className="section-eyebrow">01 / OVERVIEW</p>
                <h2>About the project</h2>
                <p>{project.overview}</p>
              </section>
            </Reveal>

            <Reveal direction="up">
              <section className="detail-section">
                <p className="section-eyebrow">02 / OBJECTIVE</p>
                <h2>Project goal</h2>
                <p>{project.goal}</p>
              </section>
            </Reveal>

            {project.features.length > 0 && (
              <Reveal direction="up">
                <section className="detail-section">
                  <p className="section-eyebrow">03 / FUNCTIONALITY</p>
                  <h2>Key features</h2>

                  <ul className="project-feature-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}

            <Reveal direction="up">
              <section className="detail-section">
                <p className="section-eyebrow">04 / DEVELOPMENT</p>
                <h2>Design & development</h2>
                <p>{project.development}</p>
              </section>
            </Reveal>

            <Reveal direction="up">
              <section className="detail-section">
                <p className="section-eyebrow">05 / CONTRIBUTION</p>
                <h2>My role</h2>
                <p>{project.role}</p>
              </section>
            </Reveal>

            {project.challenge && (
              <Reveal direction="up">
                <section className="detail-section">
                  <p className="section-eyebrow">06 / CHALLENGE</p>
                  <h2>A challenge along the way</h2>
                  <p>{project.challenge}</p>
                </section>
              </Reveal>
            )}

            <Reveal direction="up">
              <section className="detail-section">
                <p className="section-eyebrow">07 / REFLECTION</p>
                <h2>What I learned</h2>
                <p>{project.learning}</p>
              </section>
            </Reveal>

          </div>

          <aside className="project-detail-sidebar">
            <div className="detail-sidebar-card">
              <p className="section-eyebrow">PROJECT DETAILS</p>

              <div className="detail-sidebar-item">
                <span>Project</span>
                <strong>{project.name}</strong>
              </div>

              <div className="detail-sidebar-item">
                <span>Category</span>
                <strong>{project.type}</strong>
              </div>

              <div className="detail-sidebar-item">
                <span>Completed</span>
                <strong>{project.dateLabel}</strong>
              </div>

              <div className="detail-sidebar-item">
                <span>Technologies</span>
                <div className="detail-tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {(project.githubUrl || project.presentationUrl) && (
                <div className="detail-sidebar-links">
                  <p className="section-eyebrow">PROJECT RESOURCES</p>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <span>
                        <strong>Source Code</strong>
                        <small>Explore the repository on GitHub</small>
                      </span>
                      <span className="resource-arrow">↗</span>
                    </a>
                  )}

                  {project.presentationUrl && (
                    <a
                      href={project.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <span>
                        <strong>Project Presentation</strong>
                        <small>View the project demonstration</small>
                      </span>
                      <span className="resource-arrow">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>

        <div className="project-detail-navigation">
          {previousProject ? (
            <Link to={`/projects/${previousProject.slug}`}>
              ← {previousProject.name}
            </Link>
          ) : (
            <span />
          )}

          {nextProject && (
            <Link to={`/projects/${nextProject.slug}`}>
              {nextProject.name} →
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ProjectDetail
