import type { Metadata } from 'next'
import CategoryCard from '@/components/CategoryCard'

const SITE_URL = 'https://virnisha.com'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our six product categories: APIs, pharmaceutical intermediates, impurities and reference materials, fine and speciality chemicals, solvents, and deuterated compounds.',
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    url: `${SITE_URL}/products`,
    title: 'Products | VIRNISHA OVERSEAS',
    description:
      'Six product categories covering pharmaceutical, chemical and industrial sourcing requirements.',
  },
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'VIRNISHA OVERSEAS Product Categories',
  url: `${SITE_URL}/products`,
  numberOfItems: 6,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Active Pharmaceutical Ingredients (APIs)', url: `${SITE_URL}/products/apis` },
    { '@type': 'ListItem', position: 2, name: 'Pharmaceutical Intermediates', url: `${SITE_URL}/products/intermediates` },
    { '@type': 'ListItem', position: 3, name: 'Impurities & Reference Materials', url: `${SITE_URL}/products/impurities` },
    { '@type': 'ListItem', position: 4, name: 'Fine & Speciality Chemicals', url: `${SITE_URL}/products/fine-chemicals` },
    { '@type': 'ListItem', position: 5, name: 'Solvents', url: `${SITE_URL}/products/solvents` },
    { '@type': 'ListItem', position: 6, name: 'Deuterated Compounds', url: `${SITE_URL}/products/deuterated-compounds` },
  ],
}

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
        <circle cx="24" cy="24" r="5" fill="#1B2E6B" />
      </svg>
    ),
  },
]

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section aria-labelledby="products-heading" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Catalogue
            </p>
            <h1 id="products-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-blue-200 text-lg">
              Six product categories covering pharmaceutical, chemical and industrial sourcing requirements.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Product categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} large />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Enquiry prompt" className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-navy font-semibold text-xl mb-2">
            Cannot find what you are looking for?
          </p>
          <p className="text-gray-600 mb-6">
            Our catalogue is regularly updated. Contact us with your specific product requirement and CAS number.
          </p>
          <a
            href="mailto:virnishaoverseas2026@gmail.com"
            className="btn-primary"
          >
            Send Enquiry
          </a>
        </div>
      </section>
    </>
  )
}
