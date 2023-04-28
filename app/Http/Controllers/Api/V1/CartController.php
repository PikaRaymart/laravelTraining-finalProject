<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\AddToCartRequest;
use App\Http\Resources\V1\CartBookCollection;
use App\Http\Resources\V1\CartBookResource;
use App\Models\Book;
use App\Models\Cart;
use App\Models\Customer;

class CartController extends Controller{
	
  function index() {
    // returns the populated cart
    $currentCustomer = auth()->user();

    if (!($currentCustomer instanceof Customer)) return response()->json(["message" => "Server error"]);

    $info = $currentCustomer->with("carts.books")->first();

    return new CartBookCollection($info["carts"]);
  }

  // Adds a book in the cart
  function store(AddToCartRequest $request) {
    $foundBook = Book::where("status", "=", "active")
      ->find($request->bookId);
    
    if (!$foundBook) return response()->json(["message" => "No active book found with this id."]);

    if ($foundBook->stocks < $request->quantity) return response()->json(["message" => "Maximum quantity reached."]);

    $currentCustomer = auth()->user();

    if (!($currentCustomer instanceof Customer)) return response()->json(["message" => "Server error"]);
    
    // check if the book is already present in the cart,
    if (count(array_filter($currentCustomer->carts->toArray(), fn($item) => $item["book_id"]==$foundBook->id))) {
      $foundCart = Cart::where("customer_id", $currentCustomer->id)
        ->where("book_id", $foundBook->id)
        ->first();
   
      if (!($foundCart instanceof Cart)) return response()->json(["message" => "Server error"]);
        
      // make sure that both prev value and new value will not exceed the books max stocks
      if (($foundCart["quantity"] + $request->quantity) > $foundBook->stocks) return response()->json(["message" => "Maximum quantity reached."]);
      
      // add both value
      $foundCart->quantity = $foundCart->quantity + $request->quantity;

      $foundCart->save();

      return response()->json(["message" => "Successfully added book to cart."]);
    };
    // create a cart document
    $newCart = Cart::create([
      "customer_id" => "1",
      "book_id" => $foundBook->id,
      "quantity" => $request->quantity
    ]);

    $newCart->books()->attach($foundBook->id);

    return response()->json(["message" => "Successfully added book to cart."]);
  }
}
