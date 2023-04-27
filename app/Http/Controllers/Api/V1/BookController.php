<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreBookRequest;
use App\Http\Requests\V1\UpdateBookRequest;
use App\Models\Book;

class BookController extends Controller {

	public function index(){

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
	 * Remove the specified resource from storage.
	 */
	public function destroy(Book $book){
		$book->delete();

		return response()->json(["message" => "Successfully deleted book."], 200);
	}
};