'use client'

import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const inquiryTypes = [
  'Medical Patient',
  'Dental Patient',
  'Investor Relations',
  'Partner Clinic',
  'Insurance Company',
  'Transportation Partner',
  'Accommodation Partner',
  'Travel Guide',
  'Employment',
  'Affiliate',
  'Other',
]

const countries = [
  'United States', 'United Kingdom', 'Germany', 'Australia', 'Canada',
  'UAE', 'Saudi Arabia', 'France', 'Netherlands', 'Israel', 'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', inquiry: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', country: '', inquiry: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main className="contact-page">
        <div className="contact-hero">
          <div className="contact-hero-bg" />
          <div className="contact-hero-orb" />
          <div className="contact-hero-content">
            <div className="contact-eyebrow">Get in Touch</div>
            <h1 className="contact-h1">Begin your <em>journey</em></h1>
            <p className="contact-sub">Tell us how we can help. We respond within 30 minutes — in your language, at no obligation.</p>
          </div>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div className="contact-info-block">
              <div className="contact-info-label">WhatsApp</div>
              <a href="https://wa.me/19175492255" target="_blank" rel="noopener noreferrer" className="contact-info-value">+1 917-549-2255</a>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">Response Time</div>
              <div className="contact-info-value">Under 30 minutes</div>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">Languages</div>
              <div className="contact-info-value">English · German · Arabic</div>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">Offices</div>
              <div className="contact-info-value">London · Dubai · Hong Kong · Delaware</div>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">Available</div>
              <div className="contact-info-value">24 hours · 7 days a week</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name <span>*</span></label>
                <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handle} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address <span>*</span></label>
                <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handle} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={handle} />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country <span>*</span></label>
                <select id="country" name="country" required value={form.country} onChange={handle}>
                  <option value="">Select your country</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inquiry">Type of Inquiry <span>*</span></label>
              <select id="inquiry" name="inquiry" required value={form.inquiry} onChange={handle}>
                <option value="">Select inquiry type</option>
                {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us how we can help — the more detail you share, the better we can assist you." value={form.message} onChange={handle} />
            </div>

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
            </button>

            {status === 'success' && (
              <div className="form-success">
                ✓ &nbsp;Your enquiry has been received. We&apos;ll be in touch within 30 minutes.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                Something went wrong. Please try WhatsApp or email us directly.
              </div>
            )}

            <p className="form-note">Your information is confidential and will never be shared with third parties.</p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
