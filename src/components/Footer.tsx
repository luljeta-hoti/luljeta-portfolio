
import './Footer.css'
import Reveal from './Reveal'

function Footer() {
  return (
    <Reveal direction="up" duration={0.7}>
      <footer className="footer">
        <a href="#home" className="footer-logo">
          LULJETA HOTI<span>.</span>
        </a>

        <div className="footer-center">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Luljeta Hoti. All rights reserved.
          </span>

          <span className="footer-divider">|</span>

          <a href="/privacy" className="footer-privacy">
            Privacy Policy
          </a>
        </div>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </Reveal>
  )
}

export default Footer
