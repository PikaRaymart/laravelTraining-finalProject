<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\DeleteBooksRequest;
use App\Http\Requests\Api\V1\StoreBookRequest;
use App\Http\Requests\Api\V1\UpdateBookRequest;
use App\Http\Resources\Api\V1\BookCollection;
use App\Http\Resources\Api\V1\BookPageResource;
use App\Http\Resources\Api\V1\CategoryCollection;
use App\Models\Book;
use App\Models\Cart;
use App\Models\Category;
use Illuminate\Http\Request;

class BookController extends Controller{
	
  // Shows all the books
  function index(Request $request) {
    
    $categories = Category::all();
    $query = booksQuery($request);

    // Execute the query and return the results
    $books = $query->where("status", "=", "Active")->paginate(8);

    return response()->json([
      "books" => new BookCollection($books->appends($request->query())),
      "booksFilters" => [
        "categories" => new CategoryCollection($categories),
      ]
    ], 200);
  }

  // Shows a single book
  function show(Book $book) {

    if (!$book) return response()->json(["message" => "No book found with this id."], 404);

    return response()->json(["book" => new BookPageResource($book)], 200);
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

		$categories = array_map("trim", explode(",", $request->category));
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

    return response()->json(["message" => "Successfully created book."], 200);
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

		return response()->json(["message" => "Successfully updated book."], 200);
  }

  // deletes multiple books
  function deleteBulk(DeleteBooksRequest $request) {
    $bookIds = $request->bookIds;
    
    // update all the cart that has the books
    Cart::whereHas('books', function ($query) use ($bookIds) {
      $query->whereIn('book_id', $bookIds);
    })->delete();

    $books = Book::whereIn("id", $bookIds)->get();

    if (!count($books)) return response()->json(["message" => "Book ids are not valid."], 404);

    foreach($books as $book) {
      if ($book->image) {
        $imagePath = storage_path("app/public/books/".$book->image);
        unlink($imagePath);
      }

      $book->delete();
    }

		return response()->json(["message" => count($bookIds)>1? "Books deleted." : "Book deleted."], 200);
  }
}