'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate network delay for realism
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="animate-scale-in" style={{
        background: 'linear-gradient(135deg, #0d1f0d, #0a1a0a)',
        border: '1px solid #1a4a1a',
        borderRadius: 16,
        padding: '48px 40px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.02em' }}>Got it — we'll be in touch!</h3>
        <p style={{ color: '#6b7280', lineHeight: 1.7 }}>Expect to hear from us within 24 hours. We'll reach out via email to get the ball rolling.</p>
        <button
          onClick={() => setSent(false)}
          style={{ marginTop: 28, color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}
        >
          ← Send another message
        </button>
      </div>
    )
  }

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: '#1a1a1a',
    border: `1px solid ${focused === name ? '#3b82f6' : '#222'}`,
    borderRadius: 10,
    padding: '13px 16px',
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
  })

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: '#6b7280',
    display: 'block',
    marginBottom: 7,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: '#1a1a1a',
      border: '1px solid #222',
      borderRadius: 18,
      padding: '32px',
    }}>
      <div style={{ marginBottom: 10 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, letterSpacing: '-0.01em' }}>Get a free quote</h3>
        <p style={{ fontSize: 13, color: '#6b7280' }}>We reply within 24 hours</p>
      </div>

      <div style={{ borderTop: '1px solid #222', margin: '20px 0 24px' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="form-row">
          <div>
            <label style={labelStyle}>Your Name</label>
            <input
              required
              style={inputStyle('name')}
              placeholder="John Smith"
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label style={labelStyle}>Business Name</label>
            <input
              required
              style={inputStyle('biz')}
              placeholder="Smith Plumbing"
              onFocus={() => setFocused('biz')}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label style={labelStyle}>Phone</label>
            <input
              type="tel"
              required
              style={inputStyle('phone')}
              placeholder="(310) 555-0100"
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              required
              style={inputStyle('email')}
              placeholder="john@smithplumbing.com"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>What do you need?</label>
          <textarea
            required
            rows={4}
            style={{ ...inputStyle('msg'), resize: 'vertical', fontFamily: 'inherit' }}
            placeholder="Tell us about your business — what you do, where you're located, what you need..."
            onFocus={() => setFocused('msg')}
            onBlur={() => setFocused(null)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn"
          style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.8 : 1 }}
        >
          {loading ? (
            <>
              <span style={{
                width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)',
                borderTop: '2px solid #fff', borderRadius: '50%',
                animation: 'spin 0.7s linear infinite', display: 'inline-block',
              }} />
              Sending...
            </>
          ) : 'Send Message →'}
        </button>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  )
}
