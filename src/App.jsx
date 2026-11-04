import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhoWeWorkWith from './components/WhoWeWorkWith.jsx'
import Blog from './components/Blog.jsx'
import usePageTheme from './hooks/usePageTheme.js'
import Ambient from './components/Ambient.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import { usePath } from './router.js'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhoWeWorkWith />
      <Blog />
    </>
  )
}

function App() {
  const path = usePath()
  usePageTheme(path)

  return (
    <>
      <Ambient />
      <Navbar path={path} />
      <main>{path === '/about' ? <About /> : <Home />}</main>
      <a
        className="chat-fab"
        href="https://wa.me/919830675002"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon /> <span>Chat</span>
      </a>
    </>
  )
}

export default App
