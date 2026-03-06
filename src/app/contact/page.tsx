import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <div style={{ paddingTop: 64 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 60px' }}>
          <span className="label">Contact</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 20 }}>Let's build your site</h1>
          <p style={{ fontSize: 18, color: '#9ca3af', maxWidth: 560, lineHeight: 1.7 }}>
            Tell us about your business. We'll get back to you within 24 hours with a plan and timeline.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h3 style={{ marginBottom: 24, fontSize: 20 }}>What to expect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { step: '01', title: 'You reach out', desc: 'Fill out the form with your business details and what you need.' },
                { step: '02', title: 'Quick call', desc: 'We jump on a 15-min call to align on design, content, and timeline.' },
                { step: '03', title: 'We build', desc: 'Your site is designed and built in as little as 7 days.' },
                { step: '04', title: 'You go live', desc: 'We launch your site and hand over full ownership. Simple.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: '#3b82f615', border: '1px solid #3b82f630', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#3b82f6', fontWeight: 800, fontSize: 12 }}>
                    {item.step}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: 24, background: '#111', borderRadius: 12, border: '1px solid #1f1f1f' }}>
              <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>Starting at</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>$800 <span style={{ fontSize: 16, color: '#6b7280', fontWeight: 400 }}>one-time</span></div>
              <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 8 }}>Full website. No hidden fees. Delivered in ~7 days.</div>
            </div>
          </div>

          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 20, padding: 40 }}>
            <h3 style={{ marginBottom: 24, fontSize: 20 }}>Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
