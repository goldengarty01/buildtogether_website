import { useEffect, useRef } from 'react'
import { ArrowRight } from './Icons.jsx'
import ServiceVisual from './ServiceVisual.jsx'
import './Services.css'

const services = [
  {
    visual: 'roadmap',
    eyebrow: 'Plan with Us',
    title: 'Idea Conceptualization & Tech Roadmap',
    body: 'Turn a raw idea into a clear, buildable plan. We define scope, pick the right stack and map every milestone before a line of code is written.',
    points: ['Feasibility & market-fit check', 'Feature prioritisation and MVP scope', 'Phased roadmap with realistic budgets'],
  },
  {
    visual: 'product',
    eyebrow: 'Build with Us',
    title: 'End-to-End Product Development',
    body: 'From wireframes to launch, we design and build web and mobile products that are fast, reliable and ready to scale with your business.',
    points: ['UX/UI design and prototyping', 'Web, mobile and backend development', 'Launch, hosting and ongoing support'],
  },
  {
    visual: 'ai',
    eyebrow: 'Innovate with Us',
    title: 'AI Enablement & Smart Features',
    body: 'Put AI to work where it actually pays off: assistants, recommendations and automation that make your product smarter and your team faster.',
    points: ['AI chatbots and assistants', 'Personalisation and recommendations', 'Practical, cost-aware AI integration'],
  },
  {
    visual: 'automation',
    eyebrow: 'Automate with Us',
    title: 'Automation & Systems Setup',
    body: 'Replace spreadsheets and manual follow-ups with connected systems that run in the background, so you can focus on growing.',
    points: ['CRM, ERP and tool integrations', 'Workflow and notification automation', 'Clean, documented system setup'],
  },
  {
    visual: 'data',
    eyebrow: 'Grow with Us',
    title: 'Database Management & Data-Driven Insights',
    body: 'Organise your data and turn it into decisions with dashboards that show what is working and where to invest next.',
    points: ['Database design and migration', 'Live dashboards and reporting', 'Insights you can act on'],
  },
  {
    visual: 'mentorship',
    eyebrow: 'Learn with Us',
    title: 'Tech Mentorship',
    body: 'Make confident tech decisions without a CTO. We guide founders through stack choices, vendors, hiring and everything in between.',
    points: ['One-on-one founder sessions', 'Vendor and proposal reviews', 'Hiring and team-building guidance'],
  },
]

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8 12.5 2.7 2.7L16.5 9.5" />
    </svg>
  )
}

/**
 * Sets --stack-progress (0 → 1) on each card as the NEXT card slides over it,
 * which the CSS uses to shrink and dim the card underneath.
 */
function useStackProgress(listRef) {
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const cards = Array.from(list.children)
    let frame = 0

    const update = () => {
      frame = 0
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        const stickyTop = parseFloat(getComputedStyle(card).top) || 0
        const { height } = card.getBoundingClientRect()
        const nextTop = next.getBoundingClientRect().top
        const p = Math.min(1, Math.max(0, (stickyTop + height - nextTop) / height))
        card.style.setProperty('--stack-progress', p.toFixed(3))
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [listRef])
}

export default function Services() {
  const listRef = useRef(null)
  useStackProgress(listRef)

  return (
    <section className="services" id="services" data-theme-section="dark">
      <div className="container">
        <header className="services__header">
          <p className="services__kicker">What We Do</p>
          <h2 className="services__title">Services Built Around Your Vision</h2>
          <div className="services__intro">
            <p>
              Go from idea to impact with one partner for strategy, product, AI and automation, so
              you never have to manage a patchwork of freelancers and agencies.
            </p>
            <a href="/services" className="btn btn-primary">
              Explore All Services <ArrowRight />
            </a>
          </div>
        </header>

        <ol className="stack" ref={listRef}>
          {services.map((s, i) => (
            <li className="stack__card" key={s.title} style={{ '--i': i }}>
              <div className="stack__inner">
                <div className="stack__visual">
                  <ServiceVisual variant={s.visual} />
                </div>
                <div className="stack__text">
                  <p className="stack__eyebrow">
                    <span>{String(i + 1).padStart(2, '0')}</span> {s.eyebrow}
                  </p>
                  <h3>{s.title}</h3>
                  <p className="stack__body">{s.body}</p>
                  <ul className="stack__points">
                    {s.points.map((pt) => (
                      <li key={pt}>
                        <CheckIcon />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href="/services" className="stack__link">
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
