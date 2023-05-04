<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AdminBookCollection;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Book;
use App\Models\Category;
use Inertia\Inertia;

class AdminController extends Controller{
	
  // Shows all the books for the admin
  function index() {
    $categories = Category::all();
    $books = Book::paginate(3);

    return Inertia::render("Admin", [
      "booksFilters" => [
        "categories" => new CategoryCollection($categories),
      ],
      "books" => new AdminBookCollection($books)
    ]);
  }
}
