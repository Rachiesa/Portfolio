
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import './index.css'
import Noise from './components/ui/Noise'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/src/ScrollToPlugin'


function App() {
  gsap.registerPlugin(ScrollToPlugin);

  const lenis = useLenis(({ scroll }) => {
  })
  return (
    <ReactLenis root>
      <main className='relative overflow-hidden'>
        <nav>
          <div className='fixed top-0 right-0 z-10 text-tertiary font-anton text-xl p-1 gap-1'>
            <div><button onClick={() => { gsap.to(window, { duration: 1, scrollTo: "#about" }) }}
              className=''>/About</button></div>
            <div><button onClick={() => { gsap.to(window, { duration: 1, scrollTo: "#projects" }) }}
              className=''>/Projects</button></div>
            <div><button onClick={() => { gsap.to(window, { duration: 1, scrollTo: "#contact" }) }}
              className=''>/Contact</button></div>
          </div>
          <div className='hidden md:block'>
            <Navigation />
          </div>
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
