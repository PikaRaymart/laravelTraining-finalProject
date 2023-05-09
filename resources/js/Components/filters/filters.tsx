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
  FilterReset,
  PriceLabel} from "./filters.styled"
import { useTrackedState } from "@/store"
import { useFilter } from "./filter.hook"


type FiltersProps = {
  url: string
}

const Filters = () => {
  const { booksFilters: { categories } } = useTrackedState()
  const {
    isExpanded,
    handleExpansion,
    handleFormSubmit,
    handleCategoryChange,
    handlePriceChange,
    reset,
    data
  } = useFilter()

  const renderCategoryInputs = () => {

    return categories.map(category => (
      <CategoryItem key={ category }>
        <input
          id={ category } 
          type="checkbox"
          value={ category }
          checked={ data.category.includes(category) }
          onChange={ () => handleCategoryChange(category) } />
        <CategoryLabel htmlFor={ category }>{ category }</CategoryLabel>
      </CategoryItem>
    ))
  }

  return (
    <Wrapper onSubmit={ handleFormSubmit }>
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
            <PriceLabel htmlFor="price-from">Minimum</PriceLabel>
            <PriceInput
              type="number"
              min={ 0 }
              name="price-from"
              id="price-from"
              placeholder="From: 100"
              value={ data.minPrice }
              onChange={ e => handlePriceChange(e, "minPrice") } />
          </PriceInputWrapper>
          <PriceInputWrapper>
            <PriceLabel htmlFor="price-to">Maximum</PriceLabel>
            <PriceInput
              type="number"
              min={ 0 }
              name="price-to"
              id="price-to"
              placeholder="To: 200"
              value={ data.maxPrice }
              onChange={ e => handlePriceChange(e, "maxPrice") } />
            
          </PriceInputWrapper>
        </Fieldset>
        <FiltersOptionsContainer>
          <FilterNow type="submit">Filter now</FilterNow>
          <FilterReset 
            type="button"
            onClick={ () => reset() }>Reset</FilterReset>
        </FiltersOptionsContainer>
      </FilterInnerContainer>
    </Wrapper>
  )
}


export default Filters