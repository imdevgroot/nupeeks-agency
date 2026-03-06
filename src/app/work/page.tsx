import Footer from '@/components/Footer'
import PortfolioCard from '@/components/PortfolioCard'

const portfolio = [
  { name: 'Dynamic Plumbers Inglewood', category: 'Plumbing', url: 'https://dynamic-plumbers-inglewood.vercel.app', color: '#3b82f6', initials: 'DP', desc: 'Full-service plumbing company serving Inglewood and surrounding areas. Built with local SEO in mind.' },
  { name: 'The Hair Parlor on 8th', category: 'Salon', url: 'https://the-hair-parlor-on-8th.vercel.app', color: '#ec4899', initials: 'HP', desc: 'Boutique hair salon with online booking integration and a gallery showcasing their best work.' },
  { name: 'Speedy Plumbing and Heating', category: 'Plumbing & HVAC', url: 'https://speedy-plumbing-and-heating.vercel.app', color: '#f59e0b', initials: 'SP', desc: 'Emergency plumbing and HVAC services. Fast-loading site optimized for urgent service searches.' },
]

export default function Work() {
  return (
    <>
      <div style={{ paddingTop: 64 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 60px' }}>
          <span className="label">Our Portfolio</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 20 }}>Work we're proud of</h1>
          <p style={{ fontSize: 18, color: '#9ca3af', maxWidth: 520, lineHeight: 1.7 }}>
            Every site we build is fast, mobile-first, and designed to turn visitors into customers.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 32 }}>
          {portfolio.map(p => (
            <div key={p.name}>
              <PortfolioCard {...p} />
              <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, marginTop: 16, padding: '0 4px' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, background: '#111', border: '1px solid #1f1f1f', borderRadius: 20, padding: '60px 48px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 16 }}>Want to be next?</h2>
          <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
            We're taking new clients. Get a professional website for your business starting at $800.
          </p>
          <a href="/contact" className="btn">Start Your Project →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
