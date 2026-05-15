export default function Goals() {
  return (
    <section id="goals">
      <div className="goals-orb" />
      <div className="section-label reveal">Our Vision &amp; Goals</div>
      <h2 className="reveal" style={{ fontSize: 'clamp(3rem,5vw,5.5rem)', marginBottom: '28px' }}>
        Making world-class care<br/><em>accessible to everyone</em>
      </h2>
      <p className="mission-text reveal reveal-delay-1">
        Our mission is to remove the complexity, uncertainty, and fear from medical travel — replacing it with clarity, trust, and seamless service. We believe every person deserves access to excellent healthcare, regardless of where they live or what their home country charges.
      </p>
      <div className="goals-grid">
        <div className="goal-item reveal reveal-delay-1">
          <div className="goal-num">GOAL 01</div>
          <h4>Become the world&apos;s most trusted medical tourism concierge service</h4>
          <p>We are building the infrastructure, the clinical partnerships, and the patient trust that makes AestheticaLife the first name anyone thinks of when considering medical travel.</p>
        </div>
        <div className="goal-item reveal reveal-delay-2">
          <div className="goal-num">GOAL 02</div>
          <h4>Facilitate 100,000 patient journeys annually within five years</h4>
          <p>Scaling across every major healthcare destination globally — Turkey, Vietnam, South Korea, Thailand, Mexico, and beyond — serving patients from every corner of the world.</p>
        </div>
        <div className="goal-item reveal reveal-delay-3">
          <div className="goal-num">GOAL 03</div>
          <h4>Raise the standard of the entire industry</h4>
          <p>Through our closed-loop care model, accreditation standards, and post-care network, we intend to demonstrate that medical tourism can — and should — be as safe and supported as treatment at home.</p>
        </div>
      </div>
    </section>
  )
}
