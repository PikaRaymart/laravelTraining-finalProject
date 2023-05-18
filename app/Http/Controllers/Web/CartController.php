<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\UpdateCartRequest;
use App\Http\Requests\Web\AddToCartRequest;
use App\Http\Resources\Web\CartBookCollection;
use App\Models\Book;
use App\Models\Cart;
use Inertia\Inertia;

class CartController extends Controller{
	
  function index() {
    $customer = authenticatedCustomer();

    $cart = $customer->carts()->with("books")->get();

    return Inertia::render("Cart", [
      "cart" => new CartBookCollection($cart)
    ]);
  }

  // Adds a book in the cart
  function store(AddToCartRequest $request) {
    $customer = authenticatedCustomer();
    $foundBook = Book::where("status", "=", "active")
      ->find($request->bookId);

    if (!$foundBook) return response()->json(["message" => "No active book found with this id."], 404);

    if ($foundBook->stocks < $request->quantity) return redirect("/books/{$foundBook->id}")->withErrors("failure", "Maximum quantity reached.");
 
    // check if the book is already present in the cart,
    if (count(array_filter($customer->carts->toArray(), fn($item) => $item["book_id"]==$foundBook->id))) {
      $foundCart = Cart::where("customer_id", $customer->id)
        ->where("book_id", $foundBook->id)
        ->first();
   
      if (!($foundCart instanceof Cart)) return response()->json(["message" => "Server error"], 500);
        
      // make sure that both prev value and new value will not exceed the books max stocks
      if (($foundCart["quantity"] + $request->quantity) > $foundBook->stocks) return redirect("/books/{$foundBook->id}")->withErrors("failure", "Maximum quantity reached.");
      
      // add both value
      $foundCart->quantity = $foundCart->quantity + $request->quantity;

      $foundCart->save();

      return redirect("/books/{$foundBook->id}")->with("success", "Successfully added book to cart.");
    };
    // create a cart document
    $newCart = Cart::create([
      "customer_id" => $customer->id,
      "book_id" => $foundBook->id,
      "quantity" => $request->quantity
    ]);

    $newCart->books()->attach($foundBook->id);

    return redirect("/books/{$foundBook->id}")->with("success", "Successfully added book to cart.");
  }

  // updates the cart of the customer
  function update(UpdateCartRequest $request) {

    foreach ($request->all()["updates"] as $update) {
      if (isset($update["delete"]) && $update["delete"]==true) {
        Cart::destroy($update["cartId"]);
      } else {
        Cart::where("id", $update["cartId"])
          ->update(["quantity" => $update["quantity"]]);
      }
    }

    return redirect("cart")->with("success", "Successfully updated cart.");
  }
}
