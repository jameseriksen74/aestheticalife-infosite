'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="/" className="nav-logo">Aesthetica<span>Life</span></a>
      <ul className="nav-links">
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#journey">How It Works</a></li>
        <li><a href="/#destinations">Destinations</a></li>
        <li><a href="/#goals">Our Goals</a></li>
        <li><a href="/contact" className="nav-cta">Get Started</a></li>
      </ul>
    </nav>
  )
}
