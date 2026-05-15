const destinations = [
  { phase: 'Phase 1 · Launch Destination', name: 'Turkey', desc: 'Global leader in dental, hair transplant & cosmetic surgery. 2M+ health tourists annually. 40 JCI-accredited facilities.' },
  { phase: 'Phase 2 · Expansion', name: 'Vietnam', desc: 'Emerging medical tourism hub. World-competitive dental costs. JCI-accredited FV Hospital & Vinmec network.' },
  { phase: 'Phase 2 · Expansion', name: 'South Korea', desc: 'World capital of cosmetic surgery. Gangnam district. Samsung Medical Center & Asan Medical Center. K-beauty precision.' },
  { phase: 'Phase 2–3', name: 'Thailand', desc: 'Internationally renowned healthcare system. Bumrungrad International Hospital. Excellence in complex procedures.' },
  { phase: 'Phase 2–3', name: 'Mexico', desc: 'Premier destination for US & Canadian patients. Bariatric, dental & cosmetic excellence. Close proximity advantage.' },
  { phase: 'Phase 3', name: 'Hungary', desc: "Europe's dental tourism capital. Budapest's world-class clinics serve millions of Western European patients annually." },
]

export default function Destinations() {
  return (
    <section id="destinations">
      <div className="reveal">
        <div className="section-label">Destinations</div>
        <h2>The world&apos;s finest <em>healthcare hubs</em></h2>
      </div>
      <p className="reveal reveal-delay-1">We partner with accredited clinics across the globe&apos;s leading medical tourism destinations — carefully selected for clinical excellence, patient experience, and value.</p>
      <div className="dest-grid">
        {destinations.map((d, i) => (
          <div key={i} className={`dest-card dest-card-${i} reveal reveal-delay-${(i % 3) + 1}`}>
            <div className="dest-bg" />
            <div className="dest-geo" />
            <div className="dest-overlay" />
            <div className="dest-content">
              <div className="dest-phase">{d.phase}</div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
