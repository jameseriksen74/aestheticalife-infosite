'use client'

import { useEffect } from 'react'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Journey from './components/Journey'
import Destinations from './components/Destinations'
import WhyUs from './components/WhyUs'
import Goals from './components/Goals'
import Procedures from './components/Procedures'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Journey />
        <Destinations />
        <WhyUs />
        <Goals />
        <Procedures />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
