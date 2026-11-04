import { useEffect } from 'react'

// A section "takes over" the page colours once its top passes this point in the viewport.
const TRIGGER = 0.7

/**
 * Fades the whole page between dark and light as you scroll.
 * Mark sections with data-theme-section="dark" | "light"; the last one whose top
 * has crossed the trigger line sets <body data-theme>.
 */
export default function usePageTheme(path) {
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * TRIGGER
      let theme = 'dark'
      for (const section of document.querySelectorAll('[data-theme-section]')) {
        if (section.getBoundingClientRect().top < line) theme = section.dataset.themeSection
      }
      document.body.dataset.theme = theme
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
      delete document.body.dataset.theme
    }
  }, [path])
}
