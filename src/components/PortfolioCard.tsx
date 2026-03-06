'use client'

interface Props {
  name: string
  category: string
  url: string
  color: string
  initials: string
}

export default function PortfolioCard({ name, category, url, color, initials }: Props) {
  return (
    <div style={{
      background: '#111', border: '1px solid #1f1f1f', borderRadius: 16,
      overflow: 'hidden', transition: 'border-color 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = '#3b82f6';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = '#1f1f1f';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
    }}>
      {/* Mock browser preview */}
      <div style={{ background: '#1a1a1a', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
        <div style={{ flex: 1, background: '#0a0a0a', borderRadius: 4, padding: '3px 10px', marginLeft: 8, fontSize: 11, color: '#4b5563' }}>
          {url.replace('https://', '')}
        </div>
      </div>
      {/* Site preview mockup */}
      <div style={{
        height: 200, background: `linear-gradient(135deg, ${color}15 0%, #0a0a0a 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: 16,
          background: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, fontWeight: 800, color: '#fff', boxShadow: `0 0 40px ${color}40`
        }}>
          {initials}
        </div>
      </div>
      <div style={{ padding: '20px 24px 24px' }}>
        <p style={{ fontSize: 12, color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{category}</p>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{name}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: '#3b82f6', fontWeight: 600, fontSize: 14
        }}>
          View Site →
        </a>
      </div>
    </div>
  )
}
