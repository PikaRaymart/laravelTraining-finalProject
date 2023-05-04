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

class BookController extends Controller{
	
  // Shows all the books
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
    $book = $request->all();
    
    if ($request->hasFile("image")) {
			$image = $request->file("image");
			$filename = time()."-".$image->getClientOriginalName();
			$path = $image->storeAs("public/books", $filename);
			$book["image"] = $filename;
		}

		$newBook = Book::create($book);
  
    if ($request->categories) {
      $categories = array_map("trim", explode(",", $request->category));
    
      foreach ($categories as $categoryName) {
        $category = Category::where("name", $categoryName)->first();
  
        if ($category) {
          $newBook->categories()->attach($category);
        } else {
          $newCategory = Category::create(["name" => $categoryName]);
  
          $newBook->categories()->attach($newCategory);
        }
      }
    }

    return redirect("admin");
  }
}
