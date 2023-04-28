<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\AddToCartRequest;
use App\Models\Book;

class CartController extends Controller{
	
  // Adds a book in the cart
  function store(AddToCartRequest $request) {
    // check first if book is present
    $foundBook = Book::where("status", "=", "active")
      ->find($request->bookId);

    if (!$foundBook) return response()->json(["message" => "No active book found with this id."]);

    if ($foundBook->stocks < $request->quantity) return response()->json(["message" => "Maximum quantity reached."]);
      
    return response()->json(["message" => "Successfully added book to cart."]);
  }
}
