const items = [
  { icon: '🤖', title: 'AI-First Automation', desc: 'Our AI responds to inquiries in under 30 seconds in your language — across WhatsApp, Instagram, Facebook, email, and web chat simultaneously. No other service operates at this level of multilingual automation.' },
  { icon: '🔗', title: 'Closed-Loop Care', desc: 'We are the only concierge service that coordinates local pre-visit evaluations before you travel and local aftercare when you return home — keeping your treatment clinic informed throughout your entire recovery.' },
  { icon: '🌍', title: 'Truly Multilingual', desc: 'English, German, and Arabic from Day 1. French and Dutch in Phase 2. We meet patients in their own language — not just translated text, but culturally fluent communication across every channel.' },
  { icon: '💳', title: 'Flexible Payment', desc: 'We offer Klarna, Affirm, and Afterpay buy-now-pay-later options, making high-value medical procedures genuinely accessible to patients who would otherwise delay essential treatment.' },
  { icon: '🏛️', title: 'Global Credibility', desc: 'Delaware LLC with virtual offices in Central London, Dubai DIFC, and Hong Kong — giving us credible, professional presence in every major source market we serve.' },
  { icon: '⭐', title: 'Reputation-First', desc: 'We work exclusively with JCI and nationally accredited partner clinics, and our built-in review programme actively builds verified patient feedback for every clinic we represent.' },
]

export default function WhyUs() {
  return (
    <section id="why">
      <div className="section-label reveal">Why AestheticaLife</div>
      <h2 className="reveal" style={{ marginBottom: '80px' }}>What makes us <em>different</em></h2>
      <div className="why-grid">
        {items.map((item, i) => (
          <div key={i} className={`why-item reveal reveal-delay-${(i % 4) + 1}`}>
            <div className="why-icon-wrap">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
