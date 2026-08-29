import type { Metadata } from 'next'
import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'

const SITE_URL = 'https://virnisha.com'

export const metadata: Metadata = {
  title: 'VIRNISHA OVERSEAS — Global Sourcing & Trading Solutions',
  description:
    'Connecting you with reliable manufacturers and suppliers across pharmaceutical, chemical and industrial segments. APIs, intermediates, fine chemicals, solvents and more.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: 'VIRNISHA OVERSEAS — Global Sourcing & Trading Solutions',
    description:
      'Connecting you with reliable manufacturers and suppliers across pharmaceutical, chemical and industrial segments.',
  },
}

const featuredApis = [
  { name: 'Semaglutide', cas: '910463-68-2' },
  { name: 'Dapagliflozin', cas: '461432-26-8' },
  { name: 'Artemether', cas: '71963-77-4' },
  { name: 'Digoxin', cas: '20830-75-5' },
  { name: 'Desmopressin USP', cas: '62288-83-9' },
]

const categories = [
  {
    slug: 'apis',
    name: 'Active Pharmaceutical Ingredients',
    shortName: 'APIs',
    description: 'Global portfolio spanning cardiovascular, oncology, anti-infective, CNS and specialty segments.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#1B2E6B" strokeWidth="2" />
        <path d="M16 24h16M24 16v16" stroke="#C8960C" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#1B2E6B" />
      </svg>
    ),
  },
  {
    slug: 'intermediates',
    name: 'Pharmaceutical Intermediates',
    shortName: 'Intermediates',
    description: 'Key building blocks for pharmaceutical synthesis and process chemistry.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <polygon points="24,4 44,36 4,36" stroke="#1B2E6B" strokeWidth="2" fill="none" />
        <polygon points="24,14 36,34 12,34" fill="#C8960C" opacity="0.3" />
        <circle cx="24" cy="24" r="4" fill="#C8960C" />
      </svg>
    ),
  },
  {
    slug: 'impurities',
    name: 'Impurities & Reference Materials',
    shortName: 'Impurities',
    description: 'Pharmaceutical impurity standards and reference materials for analytical and QC applications.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#1B2E6B" strokeWidth="2" />
        <path d="M12 20h24M12 28h16" stroke="#C8960C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="28" r="4" fill="#C8960C" />
      </svg>
    ),
  },
  {
    slug: 'fine-chemicals',
    name: 'Fine & Speciality Chemicals',
    shortName: 'Fine Chemicals',
    description: 'High-purity fine and speciality chemicals for laboratory and industrial use.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M20 8v14l-8 16h24l-8-16V8H20z" stroke="#1B2E6B" strokeWidth="2" fill="none" />
        <path d="M14 32h20" stroke="#C8960C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="8" r="2" fill="#C8960C" />
        <circle cx="28" cy="8" r="2" fill="#C8960C" />
      </svg>
    ),
  },
  {
    slug: 'solvents',
    name: 'Solvents',
    shortName: 'Solvents',
    description: 'High-purity solvents for pharmaceutical, laboratory and industrial applications.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M14 8h20l4 8H10L14 8z" stroke="#1B2E6B" strokeWidth="2" fill="none" />
        <rect x="10" y="16" width="28" height="24" rx="2" stroke="#1B2E6B" strokeWidth="2" fill="none" />
        <path d="M18 28c2-4 10-4 12 0" stroke="#C8960C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'deuterated-compounds',
    name: 'Deuterated Compounds',
    shortName: 'Deuterated',
    description: 'NMR solvents, isotope-labelled reagents and deuterated compounds for analytical chemistry.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="#1B2E6B" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="18" ry="8" stroke="#C8960C" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" fill="#1B2E6B" />
        <text x="22" y="28" fontSize="8" fill="white" fontWeight="bold">D</text>
      </svg>
    ),
  },
]

const services = [
  'Product sourcing and supplier identification',
  'RFQ and quotation coordination',
  'Bulk and repeat procurement support',
  'COA, SDS/MSDS, TDS and specification-document coordination',
  'Customised sourcing against customer specifications',
  'Domestic and international sourcing support',
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-navy min-h-[90vh] flex items-center"
      >
        {/* SVG background pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hex-pattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
              <polygon
                points="40,2 78,22 78,70 40,90 2,70 2,22"
                fill="none"
                stroke="#C8960C"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>

        {/* Molecular decoration */}
        <svg
          className="absolute right-0 top-1/4 w-64 h-64 opacity-20 hidden lg:block"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="30" stroke="#C8960C" strokeWidth="2" />
          <circle cx="40" cy="60" r="18" stroke="#C8960C" strokeWidth="2" />
          <circle cx="160" cy="60" r="18" stroke="#C8960C" strokeWidth="2" />
          <circle cx="40" cy="140" r="18" stroke="#C8960C" strokeWidth="2" />
          <circle cx="160" cy="140" r="18" stroke="#C8960C" strokeWidth="2" />
          <line x1="70" y1="100" x2="40" y2="75" stroke="#C8960C" strokeWidth="1.5" />
          <line x1="130" y1="100" x2="160" y2="75" stroke="#C8960C" strokeWidth="1.5" />
          <line x1="70" y1="100" x2="40" y2="125" stroke="#C8960C" strokeWidth="1.5" />
          <line x1="130" y1="100" x2="160" y2="125" stroke="#C8960C" strokeWidth="1.5" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              VIRNISHA OVERSEAS
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Global Sourcing &amp;{' '}
              <span className="text-gold">Trading Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              Connecting you with reliable manufacturers and suppliers across
              pharmaceutical, chemical and industrial segments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              A sourcing portfolio for pharmaceutical, chemical and industrial requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section aria-labelledby="featured-heading" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="featured-heading" className="section-heading">
              Featured Products
            </h2>
            <p className="section-subheading mx-auto">
              A selection from our pharmaceutical API portfolio
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredApis.map((api) => (
              <Link
                key={api.cas}
                href="/products/apis"
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-navy hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="h-1 w-12 bg-gold rounded-full mb-4 group-hover:w-full transition-all duration-300" />
                <h3 className="font-semibold text-navy text-base mb-2 group-hover:text-navy">
                  {api.name}
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-auto">
                  CAS {api.cas}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products/apis" className="btn-primary">
              View All APIs
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section aria-labelledby="portfolio-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="portfolio-heading" className="section-heading">
              Our Product Portfolio
            </h2>
            <p className="section-subheading mx-auto">
              Six product categories covering your pharmaceutical, chemical and industrial sourcing needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section aria-labelledby="services-heading" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              End-to-end support from product identification to documentation coordination
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm"
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <p className="text-white text-sm leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 bg-gold"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for a specific compound or grade?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Send us an inquiry and we will coordinate sourcing and documentation for your requirement.
          </p>
          <a
            href="mailto:virnishaoverseas2026@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-600 transition-colors duration-200 text-lg"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  )
}
