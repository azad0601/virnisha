import Link from 'next/link'
import type { ReactNode } from 'react'

interface CategoryCardProps {
  slug: string
  name: string
  shortName?: string
  description: string
  icon: ReactNode
  large?: boolean
}

export default function CategoryCard({ slug, name, description, icon, large }: CategoryCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className={`group relative block bg-white rounded-xl border-2 border-gray-200 hover:border-navy transition-all duration-200 hover:shadow-lg overflow-hidden ${large ? 'p-8' : 'p-6'}`}
    >
      {/* Gold left accent on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-l-xl" aria-hidden="true" />

      <div className={`flex flex-col ${large ? 'gap-5' : 'gap-4'}`}>
        <div className="w-14 h-14 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center group-hover:bg-navy/10 transition-colors duration-200">
          {icon}
        </div>

        <div>
          <h3 className={`font-bold text-navy group-hover:text-navy leading-snug mb-2 ${large ? 'text-xl' : 'text-lg'}`}>
            {name}
          </h3>
          <p className={`text-gray-600 leading-relaxed ${large ? 'text-sm' : 'text-xs'}`}>
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-navy font-semibold text-sm mt-auto">
          <span>View Products</span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}
