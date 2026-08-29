import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/products/apis', label: 'APIs' },
  { href: '/products/intermediates', label: 'Intermediates' },
  { href: '/products/fine-chemicals', label: 'Fine Chemicals' },
  { href: '/products/solvents', label: 'Solvents' },
  { href: '/products/deuterated-compounds', label: 'Deuterated' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="VIRNISHA OVERSEAS — Home">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-gold/30 flex items-center justify-center">
                <img src="/logo.png" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-white text-base">VIRNISHA</span>
                <span className="block font-semibold text-gold text-xs tracking-widest">OVERSEAS</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-2">
              Global Sourcing &amp; Trading Solutions
            </p>
            <p className="text-blue-300 text-xs leading-relaxed">
              A sourcing portfolio for pharmaceutical, chemical and industrial requirements.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-gold font-semibold text-xs uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-200 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-gold font-semibold text-xs uppercase tracking-widest mb-6">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+917977119881" className="text-blue-200 text-sm hover:text-white transition-colors">
                  +91 7977119881
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:virnishaoverseas2026@gmail.com" className="text-blue-200 text-sm hover:text-white transition-colors break-all">
                  virnishaoverseas2026@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-200 text-sm">
                  Dombivali (West),<br />
                  Thane, Mumbai, India
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs">
            &copy; 2026 Virnisha Overseas. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Dombivali (West), Thane, Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  )
}
