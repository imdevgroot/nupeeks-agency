import Link from 'next/link'
import Footer from '@/components/Footer'
import PortfolioCard from '@/components/PortfolioCard'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    title: 'Website Design',
    price: '$800',
    period: 'one-time',
    desc: 'A fast, professional website built to convert visitors into customers. Mobile-first, SEO-ready, and done in days — not months.',
    icon: '🖥️',
    tag: 'Most Popular',
  },
  {
    title: 'SEO Blog Content',
    price: '$199',
    period: '/mo',
    desc: 'Monthly blog posts written for your niche and city. Get found on Google for the searches that matter to your business.',
    icon: '📝',
    tag: null,
  },
  {
    title: 'Google Profile Optimization',
    price: '$149',
    period: 'one-time',
    desc: 'Fully optimize your Google Business Profile so you show up in local map packs and customers find you first.',
    icon: '📍',
    tag: null,
  },
]

const portfolio = [
  { name: 'Dynamic Plumbers Inglewood', category: 'Plumbing', url: 'https://dynamic-plumbers-inglewood.vercel.app', color: '#3b82f6', initials: 'DP' },
  { name: 'The Hair Parlor on 8th', category: 'Salon', url: 'https://the-hair-parlor-on-8th.vercel.app', color: '#ec4899', initials: 'HP' },
  { name: 'Speedy Plumbing and Heating', category: 'Plumbing & HVAC', url: 'https://speedy-plumbing-and-heating.vercel.app', color: '#f59e0b', initials: 'SP' },
]

const stats = [
  { value: '3+', label: 'Sites Launched' },
  { value: '$800', label: 'Flat Rate Design' },
  { value: '7 days', label: 'Avg. Delivery' },
  { value: '100%', label: 'Client Satisfaction' },
]

const categories = [
  { cat: 'Plumbers', icon: '🔧' },
  { cat: 'Salons', icon: '💇' },
  { cat: 'Restaurants', icon: '🍽️' },
  { cat: 'HVAC', icon: '❄️' },
  { cat: 'Cleaners', icon: '🧹' },
  { cat: 'Contractors', icon: '🏗️' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div style={{ paddingTop: 64, background: 'linear-gradient(180deg, #0f0f0f 0%, #111 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '130px 24px 110px', textAlign: 'center' }}>
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: 100, padding: '7px 18px', marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3b82f6', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#3b82f6', fontSize: 13, fontWeight: 700, letterSpacing: '0.02em' }}>Web design for local businesses in Los Angeles</span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{ marginBottom: 28 }}>
            We build websites for<br />
            <span style={{ color: '#3b82f6' }}>local businesses.</span> Fast.
          </h1>

          <p className="animate-fade-up delay-200" style={{ fontSize: 19, color: '#9ca3af', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.75 }}>
            Done-for-you websites for plumbers, salons, restaurants and more across Los Angeles. Flat rate. No surprises.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn">Get Your Site →</Link>
            <Link href="/work" className="btn btn-outline">See Our Work</Link>
          </div>

          {/* Trust badge */}
          <p className="animate-fade-up delay-400" style={{ marginTop: 40, fontSize: 13, color: '#4b5563' }}>
            ✓ 7-day delivery &nbsp;·&nbsp; ✓ $800 flat rate &nbsp;·&nbsp; ✓ Unlimited revisions
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', background: '#111' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 24px' }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} className={`animate-fade-up delay-${(i + 1) * 100}`}>
                <div style={{ fontSize: 38, fontWeight: 800, color: '#3b82f6', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services">
        <span className="label">What We Offer</span>
        <h2 style={{ marginBottom: 16 }}>Simple pricing.<br />No surprises.</h2>
        <p style={{ color: '#6b7280', fontSize: 18, maxWidth: 560, marginBottom: 64, lineHeight: 1.7 }}>
          Everything a local business needs to get found online and convert visitors into customers.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {services.map((s, i) => (
            <div key={s.title} className={`card animate-fade-up delay-${(i + 1) * 100}`} style={{ position: 'relative', overflow: 'hidden' }}>
              {s.tag && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  background: '#3b82f6', color: '#fff',
                  fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, letterSpacing: '0.04em',
                }}>
                  {s.tag}
                </div>
              )}
              <div style={{ fontSize: 40, marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
              <div style={{ marginBottom: 16, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.price}</span>
                <span style={{ color: '#6b7280', fontSize: 14 }}>{s.period}</span>
              </div>
              <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: 15 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" style={{ borderTop: '1px solid #1a1a1a' }}>
        <span className="label">Our Work</span>
        <h2 style={{ marginBottom: 16 }}>Built for local businesses<br />across Los Angeles</h2>
        <p style={{ color: '#6b7280', fontSize: 18, marginBottom: 64, maxWidth: 560, lineHeight: 1.7 }}>
          Real sites for real businesses. Every one built fast, designed to convert, and optimized for search.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 48 }}>
          {portfolio.map((p, i) => (
            <div className={`animate-fade-up delay-${(i + 1) * 100}`} key={p.name}>
              <PortfolioCard {...p} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/work" className="btn btn-outline">View All Work →</Link>
        </div>
      </section>

      {/* Industries */}
      <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 24px', textAlign: 'center' }}>
          <span className="label">Industries We Serve</span>
          <h2 style={{ marginBottom: 16 }}>Any local business.<br />Any niche.</h2>
          <p style={{ color: '#6b7280', fontSize: 18, maxWidth: 540, margin: '0 auto 60px', lineHeight: 1.7 }}>
            From Inglewood plumbers to hair salons in the heart of LA — we build sites that get results.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((c, i) => (
              <div key={c.cat} className={`animate-fade-up delay-${(i + 1) * 100}`} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                background: '#1a1a1a', border: '1px solid #222',
                borderRadius: 14, padding: '20px 24px', minWidth: 100,
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}>
                <div style={{ fontSize: 28 }}>{c.icon}</div>
                <div style={{ fontSize: 13, color: '#9ca3af', fontWeight: 600 }}>{c.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <section id="contact">
        <div className="contact-grid">
          <div>
            <span className="label">Get Started</span>
            <h2 style={{ marginBottom: 20 }}>Ready to get<br />your site live?</h2>
            <p style={{ color: '#6b7280', fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
              Fill out the form and we'll get back to you within 24 hours. No long sales calls — just a quick chat and we get to work.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Flat $800 one-time for a full website',
                '7-day average turnaround',
                'Mobile-first, SEO-ready from day one',
                "Unlimited revisions until you're happy",
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: 11, color: '#3b82f6', fontWeight: 800,
                  }}>✓</div>
                  <span style={{ color: '#d1d5db', fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  )
}
