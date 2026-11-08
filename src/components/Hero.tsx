
import './Hero.css'
import Reveal from './Reveal'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow"></div>

      <div className="hero-layout">
        <Reveal direction="left" className="hero-content">
          <div className="hero-intro">
            <span className="intro-line"></span>
            COMPUTER & SOFTWARE ENGINEERING STUDENT
          </div>

          <h1>
            Turning complex tasks
            <br />
            <span className="gradient-text">
              into simple applications.
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
          <div className="logo-glow"></div>

          <svg
            className="hero-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="360 340 540 480"
            width="400"
            height="300"
            fill="none"
            aria-label="LH handwritten logo"
            role="img"
          >
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F4F0FF" />
                <stop offset="50%" stopColor="#C4B5FD" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            <path
              transform="translate(630 580) scale(0.8) translate(-630 -580)"
              fill="url(#logoGradient)"
              stroke="url(#logoGradient)"
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fillRule="evenodd"
              d="M 681,367 669,370 654,377 636,390 617,411 604,432 586,477 563,567 554,594 533,583 509,576 482,575 458,580 437,589 421,600 402,621 393,643 393,665 395,672 403,686 412,694 421,699 444,704 474,700 487,695 508,683 536,656 549,638 560,618 607,651 634,667 633,731 628,761 620,776 609,788 587,801 572,805 595,799 617,789 630,780 642,766 647,755 650,739 650,677 652,675 668,683 702,695 702,768 699,776 694,781 687,784 742,784 730,780 722,769 721,700 723,699 748,703 770,703 803,697 830,685 844,675 858,661 867,648 859,659 841,675 821,686 807,691 786,695 750,695 722,690 721,569 723,563 730,556 735,555 689,555 694,556 700,562 702,567 701,683 673,672 650,659 650,572 653,561 660,555 663,555 622,555 626,556 631,561 634,570 633,649 609,634 567,603 585,552 607,474 626,422 646,390 662,375 673,369 Z M 549,611 537,638 518,666 499,684 480,695 459,700 438,698 424,691 415,682 409,672 405,657 405,644 412,620 427,601 445,589 466,583 494,584 521,593 539,603 Z"
            />
          </svg>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
