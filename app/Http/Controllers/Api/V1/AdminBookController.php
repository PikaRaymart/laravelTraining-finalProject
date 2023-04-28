<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreBookRequest;
use App\Http\Requests\V1\UpdateBookRequest;
use App\Http\Resources\V1\AdminBookCollection;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminBookController extends Controller {

	/**
	 * Displays all books for admin.
	 */
	public function index(Request $request){
		$books = DB::table("books")->orderBy("id")->simplePaginate(15);

		$query = Book::query();
    
    // Filter by category
    if ($request->filled('category')) {
			$categories = explode(',', $request->input('category'));
			foreach ($categories as $category) {
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
    $books = $query->simplePaginate(15);

		// return $books
		return (new AdminBookCollection($books))->appends($request->query());
	}

	/**
	 * Display the specified resource.
	 */
	public function show(){
	}

	/**
	 * Stores a book
	 */
	function store(StoreBookRequest $request) {
		$book = $request->all();
	
		if ($request->hasFile("image")) {
			$image = $request->file("image");
			$filename = time()."-".$image->getClientOriginalName();
			$path = $image->storeAs("public/books", $filename);
			$book["image"] = $filename;
		}

		Book::create($book);

    return response()->json(["message" => "Successfully created book."], 200);
	}

  /**
	 * Updates a book
	 */
	public function update(UpdateBookRequest $request, Book $book){
		$updateData = $request->all();

		if ($request->hasFile("image")) {
			$image = $request->file("image");
			$filename = time()."-".$image->getClientOriginalName();
			$path = $image->storeAs("public/books", $filename);
			$updateData["image"] = $filename;
		}

		$book->update($updateData);

		return response()->json(["message" => "Successfully updated book."], 200);
	}

	/**
	 * Remove the specified book.
	 */
	public function destroy(Book $book){
		$book->delete();

		return response()->json(["message" => "Successfully deleted book."], 200);
	}

	/**
	 * Remove multiple books.
	 */
	public function bulkDestroy(Request $request){
		$bookIds = explode(",", $request->ids);
		
		Book::destroy($bookIds);

		return response()->json(["message" => "Successfully deleted book."], 200);
	}
};