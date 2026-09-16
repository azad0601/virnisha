import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductTable from "@/components/ProductTable";
import { categoryMap } from "@/lib/products/index";

const SITE_URL = "https://virnisha.com";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categoryMap[params.slug];
  if (!category) return {};

  return {
    title: category.name,
    description: `${category.description} Enquire with VIRNISHA OVERSEAS for availability, pricing and documentation.`,
    alternates: {
      canonical: `${SITE_URL}/products/${params.slug}`,
    },
    openGraph: {
      url: `${SITE_URL}/products/${params.slug}`,
      title: `${category.name} | VIRNISHA OVERSEAS`,
      description: category.description,
    },
  };
}

function buildItemListJsonLd(
  slug: string,
  category: { name: string; products: { name: string; cas: string }[] },
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    url: `${SITE_URL}/products/${slug}`,
    numberOfItems: category.products.length,
    itemListElement: category.products.slice(0, 50).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
    })),
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categoryMap[params.slug];
  if (!category) notFound();

  const jsonLd = buildItemListJsonLd(params.slug, category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <section aria-labelledby="category-heading" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-blue-300 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span>/</span>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li aria-hidden="true">
                <span>/</span>
              </li>
              <li className="text-white font-medium">{category.name}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Product Category
            </p>
            <h1
              id="category-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {category.name}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Table */}
      <section
        aria-labelledby="products-table-heading"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Note:</strong> This catalogue is for sourcing reference
              only. Product availability, grade, specification, regulatory
              status, documentation and pricing must be confirmed for each
              individual enquiry.
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2
              id="products-table-heading"
              className="text-xl font-bold text-navy"
            >
              {category.products.length} Products Listed
            </h2>
            <a
              href="mailto:virnishaoverseas2026@gmail.com"
              className="btn-primary text-sm px-4 py-2"
            >
              Send Enquiry
            </a>
          </div>

          <ProductTable products={category.products} />
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Product enquiry call to action"
        className="py-16 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">
            Need a specific grade or quantity?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us with your product name, CAS number, required quantity and
            grade for a tailored quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:virnishaoverseas2026@gmail.com"
              className="btn-primary"
            >
              Email Enquiry
            </a>
            <a href="tel:+918655807858" className="btn-secondary">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
