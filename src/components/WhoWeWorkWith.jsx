import { ArrowRight } from './Icons.jsx'
import CarouselArrows from './CarouselArrows.jsx'
import useCarousel from '../hooks/useCarousel.js'
import './WhoWeWorkWith.css'

const segments = [
  {
    title: 'Startups',
    colors: ['#ff8a3d', '#8b5cf6'],
    tag: 'Launch',
    body: 'For founders building from the ground up who need a scalable tech foundation without the cost of a full-time team.',
    icon: <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2ZM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />,
  },
  {
    title: 'Family Businesses',
    colors: ['#f59e0b', '#f43f5e'],
    tag: 'Legacy',
    body: 'For owners looking to modernize operations, expand their online reach, and secure their legacy in the digital age.',
    icon: <path d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9.5 20v-6h5v6" />,
  },
  {
    title: 'Healthcare',
    colors: ['#14b8a6', '#38bdf8'],
    tag: 'Care',
    body: 'Improving patient care and streamlining operations with technology.',
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7ZM3.2 12h4.3l1.5-3 3 6 1.5-3h7.3" />,
  },
  {
    title: 'Marketing',
    colors: ['#ec4899', '#fb923c'],
    tag: 'Campaigns',
    body: 'Automating campaigns and gaining insights through data analytics.',
    icon: <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1ZM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />,
  },
  {
    title: 'Finance',
    colors: ['#10b981', '#6366f1'],
    tag: 'Secure',
    body: 'Building secure and scalable financial technology solutions.',
    icon: <path d="M3 21h18M5 21V10M10 21V10M14 21V10M19 21V10M2 10l10-7 10 7Z" />,
  },
  {
    title: 'Hospitality & F&B',
    colors: ['#fbbf24', '#ef4444'],
    tag: 'Bookings',
    body: 'Enhancing guest experiences and optimizing service delivery.',
    icon: <path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2M6 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />,
  },
  {
    title: 'E-commerce',
    colors: ['#a855f7', '#3b82f6'],
    tag: 'Orders',
    body: 'Creating seamless online shopping experiences and driving sales.',
    icon: <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0" />,
  },
  {
    title: 'Education',
    colors: ['#3b82f6', '#22d3ee'],
    tag: 'Learning',
    body: 'Developing innovative tools for learning and knowledge sharing.',
    icon: <path d="M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 2.5 9 2.5 12 0v-5M22 10v6" />,
  },
  {
    title: 'Fashion',
    colors: ['#d946ef', '#f59e0b'],
    tag: 'Collections',
    body: 'Integrating technology to innovate in design, retail, and customer engagement.',
    icon: <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />,
  },
  {
    title: 'Non-Profits (NGOs)',
    colors: ['#22c55e', '#2dd4bf'],
    tag: 'Impact',
    body: 'Leveraging technology to amplify impact and streamline operations.',
    icon: <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16M7 20l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 15l6 6M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />,
  },
]

export default function WhoWeWorkWith() {
  const { trackRef, atStart, atEnd, scrollByCard } = useCarousel({ cardSelector: '.who__card' })

  return (
    <section className="who" id="who-we-work-with" data-theme-section="light">
      <div className="container">
        <p className="who__kicker">Who We Work With</p>
        <h2 className="who__title">Built for Founders Across Industries</h2>
        <div className="who__intro">
          <p>
            Whether you&rsquo;re launching your first product or modernizing a business that&rsquo;s
            been running for generations, we shape the technology around your world.
          </p>
          <CarouselArrows
            atStart={atStart}
            atEnd={atEnd}
            onPrev={() => scrollByCard(-1)}
            onNext={() => scrollByCard(1)}
          />
        </div>
      </div>

      <ul className="carousel-track who__track" ref={trackRef}>
        {segments.map((s, i) => (
          <li className="who__card glass" key={s.title}>
            {/* glass illustration: colour glows behind a frosted icon tile, a tilted back tile and a tag */}
            <div className="who__visual" style={{ '--c1': s.colors[0], '--c2': s.colors[1] }} aria-hidden="true">
              <span className="who__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="who__glow who__glow--1" />
              <span className="who__glow who__glow--2" />
              <span className="who__pane who__pane--back" />
              <span className="who__pane who__pane--front">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>
              <span className="who__tag">{s.tag}</span>
            </div>
            <div className="who__body">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a href="/who-we-work-with" className="who__link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
