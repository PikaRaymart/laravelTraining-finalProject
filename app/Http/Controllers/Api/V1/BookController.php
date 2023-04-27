<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreBookRequest;
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

		// check if the book request is active or draft

		// Book::create($book);

    return $request->all();
	}

  /**
	 * Updates a book
	 */
	public function update(){
		return 2;
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(){
		//
	}
};