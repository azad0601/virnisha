import { apis } from './apis'
import { intermediates } from './intermediates'
import { impurities } from './impurities'
import { fineChemicals } from './fine-chemicals'
import { solvents } from './solvents'
import { deuterated } from './deuterated'

export interface Product {
  name: string
  cas: string
}

export interface Category {
  slug: string
  name: string
  description: string
  products: Product[]
}

export const categoryMap: Record<string, Category> = {
  apis: {
    slug: 'apis',
    name: 'Active Pharmaceutical Ingredients (APIs)',
    description:
      'Extensive global portfolio of pharmaceutical APIs spanning cardiovascular, oncology, anti-infective, CNS and specialty segments.',
    products: apis,
  },
  intermediates: {
    slug: 'intermediates',
    name: 'Pharmaceutical Intermediates',
    description:
      'Key building blocks for pharmaceutical synthesis and process chemistry.',
    products: intermediates,
  },
  impurities: {
    slug: 'impurities',
    name: 'Impurities & Reference Materials',
    description:
      'Pharmaceutical impurity standards and reference materials for analytical and quality-control applications.',
    products: impurities,
  },
  'fine-chemicals': {
    slug: 'fine-chemicals',
    name: 'Fine & Speciality Chemicals',
    description:
      'High-purity fine and speciality chemicals for laboratory and industrial use.',
    products: fineChemicals,
  },
  solvents: {
    slug: 'solvents',
    name: 'Solvents',
    description:
      'High-purity solvents for pharmaceutical, laboratory and industrial applications.',
    products: solvents,
  },
  'deuterated-compounds': {
    slug: 'deuterated-compounds',
    name: 'Deuterated Compounds',
    description:
      'NMR solvents, isotope-labelled reagents and deuterated compounds for analytical chemistry.',
    products: deuterated,
  },
}

export const allCategories = Object.values(categoryMap)

export { apis, intermediates, impurities, fineChemicals, solvents, deuterated }
