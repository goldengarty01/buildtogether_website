import { useEffect, useRef, useState } from 'react'

/**
 * Horizontal scroll-snap carousel helpers: arrow state, scroll-by-one-card,
 * and click-and-drag scrolling with the mouse (touch/trackpad scroll natively).
 */
export default function useCarousel({ cardSelector, gap = 24 }) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    const update = () => {
      setAtStart(track.scrollLeft < 8)
      setAtEnd(track.scrollLeft + track.clientWidth > track.scrollWidth - 8)
    }

    // mouse drag-to-scroll
    let startX = 0
    let startScroll = 0
    let dragging = false
    let moved = false

    const onPointerDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      dragging = true
      moved = false
      startX = e.clientX
      startScroll = track.scrollLeft
    }
    const onPointerMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - startX
      if (!moved && Math.abs(dx) > 5) {
        moved = true
        track.classList.add('is-dragging')
        track.setPointerCapture(e.pointerId)
      }
      if (moved) track.scrollLeft = startScroll - dx
    }
    const endDrag = () => {
      if (!dragging) return
      dragging = false
      if (moved) {
        track.classList.remove('is-dragging')
        // re-enable snapping and settle on the nearest card
        const card = track.querySelector(cardSelector)
        if (card) {
          const step = card.getBoundingClientRect().width + gap
          const target = Math.round(track.scrollLeft / step) * step
          track.scrollTo({ left: target, behavior: 'smooth' })
        }
      }
    }
    // swallow the click that ends a drag so links inside cards don't fire
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault()
        e.stopPropagation()
        moved = false
      }
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', endDrag)
    track.addEventListener('pointercancel', endDrag)
    track.addEventListener('click', onClickCapture, true)
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', endDrag)
      track.removeEventListener('pointercancel', endDrag)
      track.removeEventListener('click', onClickCapture, true)
      window.removeEventListener('resize', update)
    }
  }, [cardSelector, gap])

  const scrollByCard = (dir) => {
    const track = trackRef.current
    const card = track.querySelector(cardSelector)
    const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return { trackRef, atStart, atEnd, scrollByCard }
}
