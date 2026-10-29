import { useEffect, useState, useCallback } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Work from './components/Work'
import { Capabilities, Experience, Stack, Contact, Footer } from './components/Sections'

const WATCHED = ['work', 'services', 'experience', 'stack', 'contact']

export default function App() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    WATCHED.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 68
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Nav active={active} go={go} />
      <Hero go={go} />
      <main>
        <Profile />
        <Work />
        <Capabilities />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
