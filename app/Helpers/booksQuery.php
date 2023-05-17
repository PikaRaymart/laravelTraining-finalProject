<?php

use App\Models\Book;
use Illuminate\Http\Request;

if (!function_exists("booksQuery")) {
  function booksQuery(Request $request) {
    $query = Book::query();

    // Filter by category
    if ($request->filled('category')) {
			$categoriesFilter = explode(',', $request->input('category'));

      foreach ($categoriesFilter as $category) {
				$query->orWhere('category', 'LIKE', "%$category%");
			}
    }

    // Filter by minimum price
    if ($request->filled('minPrice')) {
        $query->where('price', '>=', $request->query('minPrice'));
    }

    // Filter by maximum price
    if ($request->filled('maxPrice')) {
        $query->where('price', '<=', $request->input('maxPrice'));
    }

    // Filter by a searchItem for the category or title of the book
    if ($request->filled('searchItem')) {
      $searchItem = $request->input('searchItem');
      $query->where(function ($query) use ($searchItem) {
        $query->where('category', 'LIKE', "%$searchItem%")
          ->orWhere('title', 'LIKE', "%$searchItem%");
      });
    }
    
    return $query;
  }
}