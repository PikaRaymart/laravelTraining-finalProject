<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AdminBookCollection;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller{
	
  // Shows all the books for the admin
  function index(Request $request) {
    
    $categories = Category::all();
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

    // Execute the query and return the results
    $books = $query->paginate(8);

    return Inertia::render("Admin", [
      "booksFilters" => [
        "categories" => new CategoryCollection($categories),
      ],
      "books" => new AdminBookCollection($books->appends($request->query())),
    ]);
  }
}
