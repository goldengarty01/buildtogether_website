import { ArrowRight } from './Icons.jsx'
import './CarouselArrows.css'

export default function CarouselArrows({ atStart, atEnd, onPrev, onNext }) {
  return (
    <div className="carousel-arrows">
      <button type="button" className="carousel-arrow carousel-arrow--prev glass" aria-label="Previous"
        disabled={atStart} onClick={onPrev}>
        <ArrowRight />
      </button>
      <button type="button" className="carousel-arrow glass" aria-label="Next" disabled={atEnd} onClick={onNext}>
        <ArrowRight />
      </button>
    </div>
  )
}
