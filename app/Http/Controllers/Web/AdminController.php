<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AdminBookCollection;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller{
	
  // Shows all the books for the admin
  function index(Request $request) {
    
    $categories = Category::all();
    $query = booksQuery($request);

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
