<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeleteBooksRequest;
use App\Http\Requests\Web\StoreBookRequest;
use App\Http\Requests\Web\UpdateBookRequest;
use App\Http\Resources\Web\AdminBookResource;
use App\Http\Resources\Web\BookCollection;
use App\Http\Resources\Web\BookPageResource;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Book;
use App\Models\Cart;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller{
	
  // Shows all the books
  function index(Request $request) {
    $categories = Category::all();
    $query = Book::query()->where("status", "Active");
    
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

    return Inertia::render("Books", [
      "auth" => currentAuthenticatedUser(),
      "booksFilters" => [
        "categories" => new CategoryCollection($categories),
      ],
      "books" => new BookCollection($books->appends($request->query())),
    ]);
  }

  // Shows the create book from for the admin
  function create() {
    
    return Inertia::render("Admin/Book/Create");
  }

  // Shows a single book
  function show(Book $book) {
    $currentUser = currentAuthenticatedUser();
    $ownedCart = null;

    if ( $currentUser["user"] ) {
      $ownedCart = Cart::where("customer_id", $currentUser["user"]->id)
        ->whereHas('books', function ($query) use ($book) {
            $query->where('books.id', $book->id);
        })
        ->with("books")
        ->get();
    }
   
    return Inertia::render("Books/Book", [
      "auth" => currentAuthenticatedUser(),
      "book" => new BookPageResource($book),
      "availableStocks" => $ownedCart && count($ownedCart)!==0? $book->stocks - $ownedCart[0]["quantity"] : $book->stocks,
      "limitReached" => $ownedCart && count($ownedCart)!==0 && $ownedCart[0]["quantity"]===$book->stocks
    ]);
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

    $categories = $request->category? array_map("trim", explode(",", $request->category)) : [];
		$newBook = Book::create($book);

    foreach ($categories as $categoryName) {
      $category = Category::where("name", $categoryName)->first();
  
      if ($category) {
        $newBook->categories()->attach($category);
      } else {
        $newCategory = Category::create(["name" => $categoryName]);
  
        $newBook->categories()->attach($newCategory);
      }
    }

    return redirect("admin");
  }

  // shows a form for editing a book
  function edit(Book $book) {
    
    return Inertia::render("Admin/Book/Update", [
      "book" => new AdminBookResource($book)
    ]);
  }

  // stores the updated value of the book
  function update(UpdateBookRequest $request, Book $book) {
    $updateData = $request->all();

		if ($request->hasFile("image")) {
			$image = $request->file("image");
			$filename = time()."-".$image->getClientOriginalName();
			$path = $image->storeAs("public/books", $filename);
			$updateData["image"] = $filename;
      
      if ($request->oldImage) {
        unlink(storage_path("app/public/books/".$request->oldImage));
      }
		}

		$book->update($updateData);

		return redirect("admin");
  }

  // deletes multiple books
  function deleteBulk(DeleteBooksRequest $request) {
    $bookIds = $request->bookIds;

    // update all the cart that has the books
    Cart::whereHas('books', function ($query) use ($bookIds) {
      $query->whereIn('book_id', $bookIds);
    })->delete();

    // destroy all the books
		Book::destroy($bookIds);

		return redirect()->back();
  }
}