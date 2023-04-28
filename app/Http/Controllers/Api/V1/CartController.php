<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\AddToCartRequest;
use App\Models\Book;
use App\Models\Customer;

class CartController extends Controller{
	
  // Adds a book in the cart
  function store(AddToCartRequest $request) {
    // check first if book is present
    $foundBook = Book::where("status", "=", "active")
      ->find($request->bookId);

    if (!$foundBook) return response()->json(["message" => "No active book found with this id."]);

    if ($foundBook->stocks < $request->quantity) return response()->json(["message" => "Maximum quantity reached."]);

    $currentCustomer = auth()->user();

    if (!($currentCustomer instanceof Customer)) return response()->json(["message" => "Server error"]);

    // add the book to the cart
    // array_push($currentCustomer->cart, [
    //   "id" => $request->bookId,
    //   "quantity" => $request->quantity
    // ]);
    
    $currentCustomer->cart = array_merge($currentCustomer->cart, [
      [
       "id" => $request->bookId,
       "quantity" => $request->quantity
      ]
    ]);

    $currentCustomer->save();

    return response()->json(["message" => "Successfully added book to cart."]);
  }
}
