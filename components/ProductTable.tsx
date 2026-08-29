'use client'

import { useState, useMemo } from 'react'

interface Product {
  name: string
  cas: string
}

interface ProductTableProps {
  products: Product[]
}

export default function ProductTable({ products }: ProductTableProps) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.cas && p.cas.toLowerCase().includes(q))
    )
  }, [query, products])

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <label htmlFor="product-search" className="sr-only">
          Search products by name or CAS number
        </label>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product name or CAS number…"
          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-colors text-sm"
          aria-label="Search products"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="text-sm text-gray-500" role="status" aria-live="polite">
        {filtered.length === products.length
          ? `Showing all ${products.length} products`
          : `Showing ${filtered.length} of ${products.length} products`}
        {query && ` matching "${query}"`}
      </p>

      {/* Table */}
      <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200" role="table" aria-label="Product catalogue">
            <thead>
              <tr className="bg-navy">
                <th
                  scope="col"
                  className="sticky top-0 px-4 py-4 text-left text-xs font-semibold text-gold uppercase tracking-wider w-16"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="sticky top-0 px-6 py-4 text-left text-xs font-semibold text-gold uppercase tracking-wider"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="sticky top-0 px-6 py-4 text-left text-xs font-semibold text-gold uppercase tracking-wider w-48"
                >
                  CAS No.
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-gray-500 text-sm">
                    No products found matching your search. Try a different name or CAS number.
                  </td>
                </tr>
              ) : (
                filtered.map((product, idx) => (
                  <tr
                    key={`${product.cas}-${idx}`}
                    className={`hover:bg-blue-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-3 text-sm text-gray-400 font-mono tabular-nums">
                      {idx + 1}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-900 font-medium">
                      {product.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600 font-mono">
                      {product.cas ? product.cas : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
