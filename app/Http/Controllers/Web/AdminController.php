<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AdminBookCollection;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Book;
use App\Models\Category;
use Inertia\Inertia;

class AdminController extends Controller{
	
  function index() {
    $categories = Category::all();
    $books = Book::simplePaginate(10);

    return Inertia::render("Admin", [
      "booksFilters" => [
        "categories" => new CategoryCollection($categories),
      ],
      "books" => new AdminBookCollection($books)
    ]);
  }

  function create() {
    
    return Inertia::render("Admin/Book/Create");
  }
}
