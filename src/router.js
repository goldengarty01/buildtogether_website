import { useEffect, useState } from 'react'

// Pages this site renders itself; any other link is left to the browser.
const ROUTES = ['/', '/about']

function scrollAfterNavigate(hash) {
  // wait for the new page to render before looking for the anchor
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      const el = hash && document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView()
      else window.scrollTo(0, 0)
    }),
  )
}

export function navigate(to) {
  const url = new URL(to, window.location.href)
  if (url.pathname === window.location.pathname && url.hash) {
    // same page, just jump to the section
    document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', url)
    return
  }
  window.history.pushState(null, '', url)
  window.dispatchEvent(new Event('locationchange'))
  scrollAfterNavigate(url.hash)
}

/** Current pathname; also turns clicks on internal links into client-side navigation. */
export function usePath() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a[href]')
      if (!a || a.target || a.hasAttribute('download')) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin || !ROUTES.includes(url.pathname)) return
      e.preventDefault()
      navigate(url.pathname + url.hash)
    }

    window.addEventListener('popstate', update)
    window.addEventListener('locationchange', update)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener('locationchange', update)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return path
}
