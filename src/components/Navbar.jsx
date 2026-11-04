import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, MenuIcon } from './Icons.jsx'
import './Navbar.css'

const services = [
  'Idea Conceptualization & Tech Roadmap',
  'End-to-End Product Development',
  'AI Enablement & Smart Features',
  'Automation & Systems Setup',
  'Database Management & Data Insights',
  'Tech Mentorship',
]

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  // section links point at the home page so they also work from /about
  { label: 'Services', href: '/#services', children: services },
  { label: 'Who We Work With', href: '/#who-we-work-with' },
  { label: 'Blogs', href: '/#blog' },
]

export default function Navbar({ path }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || mobileOpen ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="/" className="nav__logo" aria-label="Build Together home">
          <span className="nav__mark" aria-hidden="true">
            <span />
            <span />
          </span>
          Build Together
        </a>

        <nav
          className={`nav__links ${mobileOpen ? 'is-open' : ''}`}
          aria-label="Main"
          onClick={(e) => e.target.closest('a') && setMobileOpen(false)}
        >
          {links.map((link) =>
            link.children ? (
              <div className="nav__item nav__item--dropdown" key={link.label}>
                <a href={link.href} className="nav__link">
                  {link.label} <ChevronDown />
                </a>
                <div className="nav__dropdown">
                  {link.children.map((child) => (
                    <a href={link.href} key={child}>
                      {child}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`nav__link ${link.href === path ? 'is-active' : ''}`}
                aria-current={link.href === path ? 'page' : undefined}
              >
                {link.label}
              </a>
            ),
          )}
          <a href="#contact" className="btn btn-primary nav__cta">
            Book a Call <ArrowRight size={16} />
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>
    </header>
  )
}
