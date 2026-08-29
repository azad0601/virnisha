import type { Metadata } from 'next'

const SITE_URL = 'https://virnisha.com'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact VIRNISHA OVERSEAS for sourcing enquiries, quotation requests, and product availability. Email or call our team in Mumbai, India.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: 'Contact VIRNISHA OVERSEAS',
    description:
      'Send us a sourcing enquiry or request a quotation. We respond to all enquiries promptly.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section aria-labelledby="contact-heading" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact VIRNISHA OVERSEAS
            </h1>
            <p className="text-blue-200 text-lg">
              Send us a sourcing enquiry or request a quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section aria-label="Contact details and enquiry form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info Card */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>
              <div className="bg-navy rounded-2xl p-8 space-y-8">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#C8960C" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:virnishaoverseas2026@gmail.com"
                      className="text-white hover:text-gold transition-colors font-medium break-all"
                    >
                      virnishaoverseas2026@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#C8960C" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">Mobile</p>
                    <a
                      href="tel:+917977119881"
                      className="text-white hover:text-gold transition-colors font-medium"
                    >
                      +91 7977119881
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#C8960C" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">Address</p>
                    <address className="text-white not-italic font-medium leading-relaxed">
                      Dombivali (West),<br />
                      Thane, Mumbai,<br />
                      India
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gold/10 border border-gold/30 rounded-xl">
                <p className="text-navy text-sm leading-relaxed">
                  <strong className="text-navy">Response time:</strong> We aim to respond to all sourcing enquiries
                  within 1–2 business days. For urgent requirements, please indicate this in your message.
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8">Send an Enquiry</h2>
              <form
                action="mailto:virnishaoverseas2026@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-6"
                aria-label="Sourcing enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-navy mb-2">
                    Product / Enquiry <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    placeholder="Product name, CAS number, category…"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Please include required quantity, grade, purity, end-use and any documentation requirements…"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-base"
                >
                  Send Enquiry
                </button>

                <p className="text-xs text-gray-500 text-center">
                  This form uses your default email client. Alternatively, email us directly at{' '}
                  <a
                    href="mailto:virnishaoverseas2026@gmail.com"
                    className="text-navy underline hover:text-gold transition-colors"
                  >
                    virnishaoverseas2026@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
