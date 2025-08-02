import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'ContinentalShift - Import & Export Solutions',
  description: 'Leading global import-export company with seamless logistics and supply chain solutions.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              ContinentalShift
            </Link>
            <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/global-presence">Global Presence</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-6 py-10">{children}</main>
        <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
          © {new Date().getFullYear()} ContinentalShift. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
