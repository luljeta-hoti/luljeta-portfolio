
import { Link } from 'react-router-dom'
import smiledentImage from '../assets/projects/SmileDent.png'
import zelonImage from '../assets/projects/zelon.png'
import globeTravelImage from '../assets/projects/globetravel.webp'
import './Projects.css'
import Reveal from './Reveal'

export const projects = [
  {
    slug: 'smiledent',
    name: 'SmileDent',
    type: 'DESKTOP APPLICATION',
    completedAt: '2026-04',
    sameMonthOrder: 1,
    dateLabel: 'April 2026',
    description:
      'A dental clinic management application designed to organize patient appointments and manage clinic information.',
    technologies: ['C#', 'SQL Server', 'Windows Forms'],
    className: 'smiledent',
    image: smiledentImage,
    alt: 'SmileDent dental clinic management application',
    overview:
      'SmileDent is a dental clinic management application developed using C# and SQL Server. The project focuses on providing an interface for managing clinic appointments and organizing patient-related information.',
    goal:
      'The goal was to develop a desktop application that brings together a user interface and database operations in one system, making it easier to organize and manage appointment information.',
    features: [
      'Login and registration interfaces',
      'Appointment form',
      'Appointment records displayed in a table',
      'Create, read, update and delete operations',
      'SQL Server database integration',
    ],
    development:
      'The application was developed using C# and Windows Forms, with SQL Server used for data storage. The interface was organized around the login and registration screens, appointment form and data-management table.',
    role:
      'I worked on the application interface and functionality, including the login and registration screens, appointment form and data-management interface.',
    challenge:
      'One challenge was handling unexpected changes caused by repeated interactions with interface elements while working under time pressure. I had to review the interactions, correct the issues and make sure the application was ready for submission.',
    learning:
      'This project gave me practical experience with C# desktop application development, Windows Forms, SQL Server integration and CRUD operations. It also helped me understand how interface interactions connect with database functionality.',
    githubUrl:  'https://github.com/luljeta-hoti/smiledent',
    presentationUrl: '',
    visual: (
      <div className="preview-window project-image-preview">
        <img src={smiledentImage} alt="SmileDent application" />
      </div>
    ),
  },
  {
    slug: 'zelon',
    name: 'ZELÓN',
    type: 'E-COMMERCE BACKEND',
    completedAt: '2026-03',
    sameMonthOrder: 2,
    dateLabel: 'March 2026',
    description:
      'An e-commerce project focused on backend functionality, using PHP and SQL to manage shop data and operations.',
    technologies: ['PHP', 'SQL', 'Backend Development'],
    className: 'zelon',
    image: zelonImage,
    alt: 'ZELÓN e-commerce project screenshot',
    overview:
      'ZELÓN is an e-commerce project focused on the backend functionality of an online shop, using PHP and SQL to work with shop data and operations.',
    goal:
      'The project focused on developing the server-side functionality needed to support an e-commerce website and its data.',
    features: [],
    development:
      'The project uses PHP for server-side development and SQL for working with stored data.',
    role:
      'I worked on the backend development of the e-commerce project using PHP and SQL.',
    challenge: '',
    learning:
      'The project provided practical experience with PHP, SQL and the role of backend functionality in an e-commerce application.',
    githubUrl: 'https://github.com/luljeta-hoti/zelon',
    presentationUrl: '',
    visual: (
      <div className="preview-window project-image-preview">
        <img src={zelonImage} alt="ZELÓN project" />
      </div>
    ),
  },
  {
    slug: 'globetravel',
    name: 'GlobeTravel',
    type: 'FRONTEND WEBSITE',
    completedAt: '2026-03',
    sameMonthOrder: 1,
    dateLabel: 'March 2026',
    description:
      'A travel agency website built with HTML, CSS and JavaScript, presenting services, travel packages and company information.',
    technologies: ['HTML', 'CSS',],
    className: 'globetravel',
    image: globeTravelImage,
    alt: 'GlobeTravel travel agency website screenshot',
    overview:
      'GlobeTravel is a travel agency website developed as a course project using HTML, CSS and JavaScript. It presents the services, travel packages, company information, team and customer journey of a fictional travel agency through a structured and user-friendly interface.',
    goal:
      'The main goal was to develop a complete travel agency website that presents travel services and packages in an attractive and organized way, giving visitors a clear path from discovering the agency to exploring its services and booking a package.',
    features: [
      'Hero section with travel imagery and introductory content',
      'Navigation links to the main website sections',
      'About Us section and company statistics',
      'Travel services presented through service cards',
      'Step-by-step travel booking process',
      'Team section with agency members and roles',
      'Travel packages with pricing and included features',
      'FAQ section',
      'Contact section and footer',
      'Smooth scrolling and interactive interface elements',
    ],
    development:
      'The website uses a blue and white colour palette, travel imagery, Poppins typography, custom icons, rounded elements and card-based layouts. CSS Flexbox and Grid were used to organize the layouts, with CSS variables and reusable styling to maintain consistency. JavaScript was used for interactive functionality.',
    role:
      'I designed and developed the website structure and interface, including page layouts, styling, content organization, visual assets, navigation and interactive elements.',
    challenge: '',
    learning:
      'This project strengthened my practical understanding of HTML, CSS, Flexbox, CSS Grid, reusable styling, responsive layouts, visual hierarchy and interactive web elements. It also gave me experience developing a complete website from scratch.',
    githubUrl: 'https://github.com/luljeta-hoti/globetravel',
    presentationUrl: '',
    visual: (
      <div className="preview-window project-image-preview">
        <img src={globeTravelImage} alt="GlobeTravel website" />
      </div>
    ),
  },
]

export const sortedProjects = [...projects].sort((a, b) => {
  const dateComparison = b.completedAt.localeCompare(a.completedAt)

  if (dateComparison !== 0) return dateComparison

  return b.sameMonthOrder - a.sameMonthOrder
})

function Projects() {
  return (
    <section className="projects-section" id="work">
      <Reveal className="projects-heading">
        <div className="section-eyebrow">
          <span></span>
          SELECTED WORK
        </div>

        <div className="projects-title-row">
          <div>
            <h2>
              Things I've <span>built.</span>
            </h2>
            <p>
              A selection of projects I've worked on while exploring
              software development, web technologies and application design.
            </p>
          </div>

          <div className="projects-count">
            <span>{String(sortedProjects.length).padStart(2, '0')}</span>
            <small>FEATURED PROJECTS</small>
          </div>
        </div>
      </Reveal>

      <div className="projects-grid">
        {sortedProjects.map((project, index) => {
          const number = String(index + 1).padStart(2, '0')

          return (
            <Reveal key={project.slug} delay={index * 0.12} duration={0.7}>
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
        <Link to="/projects">
          View all projects <span>↗</span>
        </Link>
      </div>
    </section>
  )
}

export default Projects
