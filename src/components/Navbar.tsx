
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const { pathname, hash } = useLocation()

  // Scroll to the requested section
  useEffect(() => {
    if (pathname !== '/' || !hash) return

    const sectionId = hash.slice(1)

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    })
  }, [pathname, hash])

  // Detect the active section on the homepage
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" aria-label="Back to home">
        LULJETA HOTI<span>.</span>
      </Link>

      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={`/#${item.id}`}
            className={
              pathname === '/' && activeSection === item.id
                ? 'active'
                : ''
            }
            aria-current={
              pathname === '/' && activeSection === item.id
                ? 'location'
                : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="nav-status">
        <span className="status-dot"></span>
        <span>Open to opportunities</span>
      </div>
    </nav>
  )
}

export default Navbar
