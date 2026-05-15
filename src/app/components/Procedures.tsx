const procs = [
  { name: 'Dental Veneers', desc: 'Hollywood Smile, porcelain veneers, full smile design', phase: 'Phase 1' },
  { name: 'Dental Implants', desc: 'All-on-4, All-on-6, single implants, full-mouth restoration', phase: 'Phase 1' },
  { name: 'Hair Transplant', desc: 'FUE, DHI, Sapphire FUE — hair, beard, eyebrow', phase: 'Phase 1' },
  { name: 'Rhinoplasty', desc: 'Nose reshaping, correction, K-nose (South Korea)', phase: 'Phase 1' },
  { name: 'Breast Surgery', desc: 'Augmentation, reduction, lift — all approaches', phase: 'Phase 1' },
  { name: 'Body Contouring', desc: 'Tummy tuck, liposuction, BBL, full body contouring', phase: 'Phase 1' },
  { name: 'Bariatric Surgery', desc: 'Gastric sleeve, gastric bypass, weight loss surgery', phase: 'Phase 1' },
  { name: 'Facial Aesthetics', desc: 'Facelift, blepharoplasty, jaw reduction, face contouring', phase: 'Phase 1' },
  { name: 'K-Beauty Treatments', desc: 'Skin rejuvenation, dermatology, double eyelid, Korean aesthetics', phase: 'Phase 2' },
  { name: 'IVF & Fertility', desc: 'IVF, egg freezing, fertility consultations and treatment', phase: 'Phase 3' },
  { name: 'Orthopaedics', desc: 'Hip replacement, knee replacement, joint surgery', phase: 'Phase 3' },
  { name: 'Ophthalmology', desc: 'Laser eye surgery, LASIK, cataract treatment', phase: 'Phase 3' },
]

export default function Procedures() {
  return (
    <section id="procedures">
      <div className="reveal">
        <div className="section-label">Procedures We Cover</div>
        <h2>Excellence across every <em>speciality</em></h2>
      </div>
      <div className="proc-list">
        {procs.map((p, i) => (
          <div key={i} className={`proc-item reveal reveal-delay-${(i % 4) + 1}`}>
            <div className="proc-dot" />
            <h4>{p.name}</h4>
            <p>{p.desc}</p>
            <div className="proc-phase">{p.phase}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
