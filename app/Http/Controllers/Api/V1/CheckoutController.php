<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\CheckoutBookRequest;
use App\Models\Book;


class CheckoutController extends Controller{

  // single buy of book
  function store(CheckoutBookRequest $request) {
    // check for book
    $foundBook = Book::where("status", "=", "Active")
      ->find($request->bookId);

    if (!$foundBook) return response()->json(["message" => "No active book found with this id."], 404);

    // check if the amount to buy does not exceeds book's current stock
    if ($foundBook->stocks < $request->quantity) return response()->json(["message" => "Quantity exceeds books stocks."], 400);

    // can also create Sales model for admin to see
    $foundBook->stocks = $foundBook->stocks - $request->quantity;

    $foundBook->save();

    return response()->json(["message" => "Successfully bought book"], 200);
  }

  // checkout of cart of the current customer
  function cartCheckout() {

  }
}
