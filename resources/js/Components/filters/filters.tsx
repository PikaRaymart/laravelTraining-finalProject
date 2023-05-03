import { useExpansion } from "@/Hooks/useExpansion"
import { 
  Fieldset,
  FilterClose,
  FiltersTrigger, 
  FilterInnerContainer, 
  Wrapper, 
  FilterHeading,
  Legend,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  PriceInputWrapper,
  PriceInput,
  FiltersOptionsContainer,
  FilterNow,
  FilterReset} from "./filters.styled"
import { useTrackedState } from "@/store"
import { useForm } from "@inertiajs/react"


const Filters = () => {
  const [ isExpanded, handleExpansion ] = useExpansion()
  const { booksFilters: { categories } } = useTrackedState()
  const {} = useForm()

  const renderCategoryInputs = () => {

    return categories.map(category => (
      <CategoryItem key={ category }>
        <input
          id={ category } 
          type="checkbox"
          name={ category }
          value={ category } />
        <CategoryLabel htmlFor={ category }>{ category }</CategoryLabel>
      </CategoryItem>
    ))
  }

  return (
    <Wrapper>
      <FiltersTrigger 
        onClick={ handleExpansion }
        type="button"
        aria-expanded={ isExpanded }>
          <img
            src="/images/icons/filter.png"
            alt="" />
          Filters
      </FiltersTrigger>
      <FilterInnerContainer>
        <FilterClose
          onClick={ handleExpansion } 
          type="button">
            <img 
              src="/images/icons/hamburger-close.png" 
              alt=""
              aria-hidden="true" />
            <span className="sr-only">Close filters</span>
        </FilterClose>
        <FilterHeading>Filters</FilterHeading>
        <Fieldset>
          <Legend>Category</Legend>
          <CategoryList>
            { renderCategoryInputs() }
          </CategoryList>
        </Fieldset>
        <Fieldset>
          <Legend>Price</Legend>
          <PriceInputWrapper>
            <PriceInput
              name="price-from"
              id="price-from"
              placeholder="From: 100" />
            <label 
              className="sr-only"
              htmlFor="price-from">Minimum price</label>
          </PriceInputWrapper>
          <PriceInputWrapper>
            <PriceInput
              name="price-to"
              id="price-to"
              placeholder="To: 200" />
            <label 
              className="sr-only"
              htmlFor="price-to">Minimum price</label>
          </PriceInputWrapper>
        </Fieldset>
        <FiltersOptionsContainer>
          <FilterNow type="submit">Filter now</FilterNow>
          <FilterReset type="button">Reset</FilterReset>
        </FiltersOptionsContainer>
      </FilterInnerContainer>
    </Wrapper>
  )
}


export default Filters