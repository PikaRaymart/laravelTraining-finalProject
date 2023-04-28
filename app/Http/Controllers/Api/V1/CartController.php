<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\AddToCartRequest;
use App\Models\Book;
use App\Models\Cart;
use App\Models\Customer;

class CartController extends Controller{
	
  function index() {
    // returns the populated cart
    $currentCustomer = auth()->user();

    if (!($currentCustomer instanceof Customer)) return response()->json(["message" => "Server error"]);

    return $currentCustomer->with("carts.books")->get();
  }

  // Adds a book in the cart
  function store(AddToCartRequest $request) {
    $foundBook = Book::where("status", "=", "active")
      ->find($request->bookId);

    if (!$foundBook) return response()->json(["message" => "No active book found with this id."]);

    if ($foundBook->stocks < $request->quantity) return response()->json(["message" => "Maximum quantity reached."]);

    $currentCustomer = auth()->user();

    if (!($currentCustomer instanceof Customer)) return response()->json(["message" => "Server error"]);
    
    // create a cart document
    $newCart = Cart::create([
      "customer_id" => "1",
      "quantity" => $request->quantity
    ]);

    $newCart->books()->attach($foundBook->id);

    return response()->json(["message" => "Successfully added book to cart."]);
  }
}
