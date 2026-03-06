'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1f1f1f',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em' }}>
          Nu<span style={{ color: '#3b82f6' }}>Peeks</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link href="/work" style={{ color: path === '/work' ? '#fff' : '#6b7280', fontWeight: 500, fontSize: 15, transition: 'color 0.2s' }}>Work</Link>
          <Link href="/contact" style={{
            background: '#3b82f6', color: '#fff', padding: '8px 20px',
            borderRadius: 6, fontWeight: 600, fontSize: 14
          }}>Get a Site</Link>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#e5e7eb', borderRadius: 2, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#e5e7eb', borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#e5e7eb', borderRadius: 2, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <Link href="/work" onClick={() => setOpen(false)} style={{ color: '#d1d5db', fontSize: 16, fontWeight: 500, padding: '8px 0', borderBottom: '1px solid #1f1f1f' }}>Work</Link>
        <Link href="/contact" onClick={() => setOpen(false)} style={{ background: '#3b82f6', color: '#fff', padding: '12px 20px', borderRadius: 6, fontWeight: 600, fontSize: 15, textAlign: 'center' }}>Get a Site →</Link>
      </div>
    </nav>
  )
}
