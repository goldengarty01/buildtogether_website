import { ArrowRight, WhatsAppIcon } from './Icons.jsx'
import './About.css'

const founders = [
  {
    name: 'Mehek Tulsyan',
    first: 'Mehek',
    role: 'Founder',
    photo: '/team/mehek.jpeg',
    alt: 'Mehek Tulsyan, Founder of Build Together',
    highlights: [
      'M.S. Computer Science (Data Science), UMass Amherst',
      'AI & machine learning',
      'Full-stack development',
      'Industry experience in the U.S.',
    ],
    bio: [
      'I’m Mehek Tulsyan — a Data Science professional and full-stack developer with a passion for turning complex ideas into simple, impactful solutions. With a Master’s in Computer Science (Data Science) from the University of Massachusetts Amherst and hands-on experience working in the U.S. — one of the most technically advanced and competitive environments — I bring global exposure and an ability to scope, design, and deliver solutions that meet world-class standards.',
      'My expertise spans AI, machine learning, product development, and end-to-end software engineering. I’ve built and optimized advanced models, designed scalable systems, and translated ambitious ideas into user-friendly products. This blend of technical depth and real-world perspective helps me craft solutions that are not only innovative, but also practical, reliable, and aligned with client goals.',
      'I work closely with founders, startups, and growing businesses to make technology feel less intimidating and more empowering — guiding projects from concept to launch with clarity, collaboration, and precision.',
      'If you have an idea worth building, I’ll help you bring it to life — from the first sketch to a polished product that makes an impact.',
    ],
    glow: ['#ee8a3c', '#a855f7'],
  },
  {
    name: 'Vipul Nagpal',
    first: 'Vipul',
    role: 'Partner',
    photo: '/team/vipul.jpeg',
    alt: 'Vipul Nagpal, Partner at Build Together',
    highlights: [
      'B.Tech Information Technology, SRM University',
      '5+ years of professional experience',
      'Backend engineering & APIs',
      'Founder of a speaker manufacturing business',
    ],
    bio: [
      'I’m Vipul Nagpal — a Computer Science Engineer with 5+ years of professional experience turning ideas into reliable, scalable solutions. I earned my degree in Information Technology from SRM University, Chennai, and since then I’ve had the opportunity to work across diverse industries, building everything from powerful backend systems to complete end-to-end applications.',
      'My expertise lies in backend engineering and full-stack product development. Over the years, I’ve designed and delivered robust APIs, optimized large-scale systems, and built solutions that solve real business challenges. Having worked across multiple domains, I bring not just technical depth but also a practical understanding of how to align technology with business goals.',
      'Beyond software, I’ve also ventured into entrepreneurship — building and growing a speaker manufacturing business — which gives me a unique perspective on how technology, product design, and customer needs come together in the real world. This blend of engineering expertise and business mindset helps me craft solutions that are not only technically strong but also meaningful and impactful.',
      'If you have a vision worth building, I’ll help you shape it into a product that works, scales, and creates impact.',
    ],
    glow: ['#38bdf8', '#14b8a6'],
  },
]

export default function About() {
  return (
    <div className="about">
      <section className="about__intro" data-theme-section="dark">
        <div className="container">
          <p className="about__kicker">About Us</p>
          <h1 className="about__title">
            The people behind <span>Build Together</span>
          </h1>
          <p className="about__lead">
            A small team of engineers who make technology feel less intimidating and more
            empowering, guiding founders and growing businesses from concept to launch with
            clarity, collaboration, and precision.
          </p>
        </div>
      </section>

      {founders.map((f, i) => (
        <section key={f.name} className={`founder ${i % 2 ? 'founder--flip' : ''}`} data-theme-section="dark">
          <div className="container founder__grid">
            <figure className="founder__photo" style={{ '--g1': f.glow[0], '--g2': f.glow[1] }}>
              <span className="founder__glow" aria-hidden="true" />
              <div className="founder__frame glass">
                <img src={f.photo} alt={f.alt} loading={i ? 'lazy' : 'eager'} />
              </div>
              <figcaption className="founder__tag glass">
                <strong>{f.name}</strong>
                <span>{f.role}, Build Together</span>
              </figcaption>
            </figure>

            <div className="founder__text">
              <h2>
                Hi, I&rsquo;m {f.first} &ndash; <span>your Tech Partner!</span>
              </h2>
              <ul className="founder__chips">
                {f.highlights.map((h) => (
                  <li key={h} className="glass">
                    {h}
                  </li>
                ))}
              </ul>
              {f.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="about__cta" data-theme-section="dark">
        <div className="container">
          <div className="about__cta-panel glass">
            <div>
              <h2>Have an idea worth building?</h2>
              <p>Tell us about it. The first clarity session is on us.</p>
            </div>
            <div className="about__cta-actions">
              <a href="https://wa.me/919830675002" target="_blank" rel="noreferrer" className="btn btn-primary">
                <WhatsAppIcon size={18} /> Book a Free Clarity Session
              </a>
              <a href="mailto:mehek@buildtogether.co.in" className="btn btn-outline">
                Email us <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
