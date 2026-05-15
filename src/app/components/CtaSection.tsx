export default function CtaSection() {
  return (
    <section id="cta">
      <div className="cta-line cta-line-1" />
      <div className="cta-line cta-line-2" />
      <div className="section-label reveal">Begin Your Journey</div>
      <h2 className="reveal"><em>Ready</em> when you are</h2>
      <p className="reveal reveal-delay-1">Your questions answered in seconds. Your journey planned with care. Reach us on any channel — we&apos;re always here.</p>
      <div className="cta-actions reveal reveal-delay-2">
        <a href="https://wa.me/19175492255" target="_blank" rel="noopener noreferrer" className="btn-primary">Start on WhatsApp</a>
        <a href="/contact" className="btn-ghost">Send an Enquiry</a>
      </div>
      <div className="cta-detail reveal reveal-delay-3">
        London<span>·</span>Dubai<span>·</span>Hong Kong<span>·</span>Delaware, USA<span>·</span>AestheticaLife.com
      </div>
    </section>
  )
}
