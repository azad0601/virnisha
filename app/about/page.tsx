import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = 'https://virnisha.com'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about VIRNISHA OVERSEAS — a sourcing and trading company connecting customers with reliable manufacturers and suppliers across pharmaceutical, chemical and industrial product segments.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: 'About VIRNISHA OVERSEAS',
    description:
      'A sourcing and trading company connecting customers with reliable manufacturers and suppliers across pharmaceutical, chemical and industrial product segments.',
  },
}

const services = [
  {
    title: 'Product Sourcing & Supplier Identification',
    description:
      'We identify and connect you with qualified manufacturers and suppliers globally, matching your product specifications and regulatory requirements.',
  },
  {
    title: 'RFQ & Quotation Coordination',
    description:
      'We manage the request-for-quotation process on your behalf, gathering competitive offers and facilitating commercial discussions.',
  },
  {
    title: 'Bulk & Repeat Procurement Support',
    description:
      'We support both one-time procurement and ongoing repeat supply arrangements for stable, long-term sourcing relationships.',
  },
  {
    title: 'COA, SDS/MSDS, TDS & Documentation Coordination',
    description:
      'We coordinate the collection and delivery of all required quality and regulatory documents including COA, SDS/MSDS, TDS and product specifications.',
  },
  {
    title: 'Customised Sourcing Against Customer Specifications',
    description:
      'We work to your exact specification requirements, coordinating custom grades, quantities and packaging when standard catalogue products do not fit your needs.',
  },
  {
    title: 'Domestic & International Sourcing Support',
    description:
      'We leverage both domestic Indian supplier networks and international manufacturer relationships to find the best sourcing solution for each enquiry.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section aria-labelledby="about-heading" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Who We Are
            </p>
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              About VIRNISHA OVERSEAS
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A sourcing and trading company for pharmaceutical, chemical and industrial requirements.
            </p>
          </div>
        </div>
      </section>

      {/* About Body */}
      <section aria-labelledby="company-overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id="company-overview" className="text-2xl font-bold text-navy mb-6">
              Company Overview
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-5">
              <p>
                VIRNISHA OVERSEAS is a sourcing and trading company focused on connecting
                customers with reliable manufacturers and suppliers across pharmaceutical,
                chemical and industrial product segments. We support customers with product
                identification, supplier coordination, commercial sourcing and documentation
                coordination.
              </p>
              <p>
                Our portfolio spans Active Pharmaceutical Ingredients (APIs), pharmaceutical
                intermediates, impurity standards and reference materials, fine and speciality
                chemicals, high-purity solvents, and deuterated compounds for analytical and
                research applications.
              </p>
              <p>
                Operating from Dombivali (West), Thane, Mumbai, India, we work with both
                domestic and international manufacturers to fulfil sourcing requirements of
                varying scale and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section aria-labelledby="services-heading" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="section-heading">
              Our Services
            </h2>
            <p className="section-subheading mx-auto">
              Comprehensive sourcing and trading support from enquiry through to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:border-navy hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <h3 className="font-semibold text-navy text-lg leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-14">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Documentation */}
      <section aria-labelledby="quality-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                  <rect x="4" y="2" width="24" height="28" rx="2" stroke="#C8960C" strokeWidth="2" />
                  <path d="M10 10h12M10 16h12M10 22h8" stroke="#1B2E6B" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 id="quality-heading" className="text-2xl font-bold text-navy mb-4">
                  Quality &amp; Documentation
                </h2>
                <div className="text-gray-700 space-y-4 leading-relaxed">
                  <p>
                    Documentation and quality requirements are handled according to the product,
                    supplier, customer specification and applicable regulatory requirements.
                    Typical documents may include COA, SDS/MSDS, TDS, specifications and other
                    relevant documents.
                  </p>
                  <p>
                    We work to ensure that the documentation package provided meets the specific
                    requirements of each customer, recognising that regulatory and quality
                    standards vary across geographies and product types.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section aria-label="Contact call to action" className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to discuss your sourcing requirement?
          </h2>
          <p className="text-blue-200 mb-8">
            Get in touch with our team for product availability, pricing and documentation enquiries.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
