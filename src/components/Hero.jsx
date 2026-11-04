import { useEffect, useState } from 'react'
import { ArrowRight } from './Icons.jsx'
import heroVideo from '../assets/webdemo.mp4' 
import './Hero.css'

const steps = ['Idea', 'Strategy', 'Design', 'Development', 'Growth']

const segments = [
  'Startups',
  'Family Businesses',
  'Healthcare',
  'E-commerce',
  'Education',
  'Finance',
  'Hospitality',
  'NGOs',
]

// one landscape clip for both sizes; on phones it's cropped to the centre
const videos = {
  desktop: { src: heroVideo },
  mobile: { src: heroVideo },
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

function HeroBackground() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const { src, poster } = isMobile ? videos.mobile : videos.desktop

  return (
    <div className="hero__media" aria-hidden="true">
      {reduceMotion ? (
        poster && <img src={poster} alt="" />
      ) : (
        // key forces a fresh <video> when switching between desktop and mobile sources
        <video key={src} autoPlay muted loop playsInline preload="auto" poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className="hero__overlay" />
    </div>
  )
}

function RotatingSegment() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % segments.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="hero__segment">
      <span key={index} className="hero__segment-word">
        {segments[index]}
      </span>
      <span key={`bar-${index}`} className="hero__segment-bar" />
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top" data-theme-section="dark">
      <HeroBackground />

      <div className="container hero__content">
        <p className="hero__steps glass" aria-label="Idea, Strategy, Design, Development, Growth">
          {steps.map((step, i) => (
            <span key={step} className="hero__step" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
              {step}
              {i < steps.length - 1 && <ArrowRight size={14} />}
            </span>
          ))}
        </p>

        <h1 className="hero__title reveal" style={{ animationDelay: '0.5s' }}>
          Simplifying Tech for <span className="hero__accent">Visionary</span> Founders
        </h1>

        <p className="hero__lead reveal" style={{ animationDelay: '0.65s' }}>
          You have the vision. We provide the technical clarity and strategy to bring it to life.
          Let&rsquo;s build your future, together.
        </p>

        <div className="hero__actions reveal" style={{ animationDelay: '0.8s' }}>
          <a href="#contact" className="btn btn-primary">
            Book a Free Clarity Session <ArrowRight />
          </a>
          <a href="#services" className="btn btn-outline">
            Explore Services <ArrowRight />
          </a>
        </div>
      </div>

      <div className="container hero__footer reveal" style={{ animationDelay: '1s' }}>
        <p>
          Build Together works with <RotatingSegment />
        </p>
      </div>
    </section>
  )
}
