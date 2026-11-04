import { ArrowRight } from './Icons.jsx'
import CarouselArrows from './CarouselArrows.jsx'
import useCarousel from '../hooks/useCarousel.js'
import './Blog.css'

const posts = [
  {
    slug: 'ai-is-everywhere',
    category: 'AI for Business',
    title: 'AI Is Everywhere: How It’s Transforming Businesses Big and Small',
    excerpt:
      'In 2025, artificial intelligence isn’t just a buzzword reserved for tech giants – it’s a practical tool changing how business gets done at every level.',
    image: '/blog/ai-is-everywhere.jpg',
  },
  {
    slug: 'ai-replacing-linkedin',
    category: 'Future of Work',
    title: 'Will AI Replace LinkedIn? How OpenAI Is Disrupting Hiring',
    excerpt:
      'A new AI platform emerges and suddenly recruiters everywhere are asking: Is this the end of LinkedIn as we know it? Let’s unpack the hype and see how we can harness it rather than fear it.',
    image: '/blog/ai-replacing-linkedin.jpg',
  },
  {
    slug: 'ai-agents-in-business',
    category: 'AI Agents',
    title: 'AI Agents: Why the Hype and How to Use Them in Business',
    excerpt:
      'Not long ago, the idea of a computer program that could autonomously handle complex tasks sounded like science fiction. Now, these “AI agents” are one of the hottest topics in tech.',
    image: '/blog/ai-agents-in-business.jpg',
  },
]

export default function Blog() {
  const { trackRef, atStart, atEnd, scrollByCard } = useCarousel({ cardSelector: '.blog__card', gap: 48 })

  return (
    <section className="blog" id="blog" data-theme-section="dark">
      <div className="container blog__header">
        <div>
          <p className="blog__kicker">Blog</p>
          <h2 className="blog__title">Tech Insights for Founders</h2>
          <p className="blog__lead">
            Guides, trends and honest takes on AI, automation and building products, written for
            people who&rsquo;d rather build than decode jargon.
          </p>
        </div>
        <div className="blog__actions">
          <a href="/blogs" className="btn btn-primary">
            Go to Blog <ArrowRight />
          </a>
          <CarouselArrows
            atStart={atStart}
            atEnd={atEnd}
            onPrev={() => scrollByCard(-1)}
            onNext={() => scrollByCard(1)}
          />
        </div>
      </div>

      <ul className="carousel-track blog__track" ref={trackRef}>
        {posts.map((post) => (
          <li className="blog__card glass" key={post.slug}>
            <a href={`/blogs/${post.slug}`} className="blog__image" tabIndex={-1} aria-hidden="true" draggable="false">
              <img src={post.image} alt="" loading="lazy" decoding="async" draggable="false" />
            </a>
            <div className="blog__body">
              <p className="blog__category">{post.category}</p>
              <h3>
                <a href={`/blogs/${post.slug}`} draggable="false">{post.title}</a>
              </h3>
              <p className="blog__excerpt">{post.excerpt}</p>
              <a href={`/blogs/${post.slug}`} className="blog__read" draggable="false">
                Read Now <ArrowRight size={16} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
