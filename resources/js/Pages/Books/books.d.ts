

export type Book = {
  id: number,
  title: string,
  author: string,
  description: string,
  image: File | null | string,
  status: string,
  category: string,
  stocks: number,
  price: number
}

export type BooksFilters = {
  categories: string[]
}

export type BooksMetaData = {
  meta: {
    links: {
			url: string | null,
  		label: string,
  		active: boolean
		}[]
  }
}

