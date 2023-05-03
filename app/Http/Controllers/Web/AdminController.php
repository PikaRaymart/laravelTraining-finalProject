<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\StoreBookRequest;
use App\Http\Resources\V1\AdminBookCollection;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller{
	
  // Shows all the books for the admin
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

  // Shows the create book from for the admin
  function create() {
    
    return Inertia::render("Admin/Book/Create");
  }

  // Stores the sent book form data
  function store(StoreBookRequest $request) {

    if ($request->hasFile("image")) {
			$image = $request->file("image");
			$filename = time()."-".$image->getClientOriginalName();
			// $path = $image->storeAs("public/books", $filename);
			// $book["image"] = $filename;
		}

  }
}
