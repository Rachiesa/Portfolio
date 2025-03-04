
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import './index.css'
import Noise from './components/ui/Noise'
import { ReactLenis, useLenis } from 'lenis/react'

function App() {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <main className='relative overflow-hidden'>
        <nav className='hidden md:block'>
          <Navigation />
        </nav>
        <Noise
          patternSize={200}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={16}
        />
        <About />
        <Projects />
        <Contact />

      </main>
    </ReactLenis>
  )
}

export default App
