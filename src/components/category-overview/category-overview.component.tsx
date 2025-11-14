// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

// Components
import Category from '../../types/category.types'

// Utilies
import ProductItem from '../product-item/product-item.component'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
