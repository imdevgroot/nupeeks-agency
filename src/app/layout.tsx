import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NuPeeks — Web Design for Local Businesses',
  description: 'Done-for-you websites for plumbers, salons, restaurants and more across Los Angeles.',

  openGraph: {
    title: 'NuPeeks',
    description: 'Premium websites for local businesses',
    url: 'https://nupeeks-agency.vercel.app',
    siteName: 'NuPeeks',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'NuPeeks' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NuPeeks',
    description: 'Premium websites for local businesses',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
