import './Ambient.css'

/** Slow-drifting colour blobs behind the page — the "wallpaper" the glass panes blur. */
export default function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__blob ambient__blob--1" />
      <span className="ambient__blob ambient__blob--2" />
      <span className="ambient__blob ambient__blob--3" />
      <span className="ambient__blob ambient__blob--4" />
    </div>
  )
}
