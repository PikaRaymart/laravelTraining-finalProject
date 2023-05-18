<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PayPalController extends Controller{

	// checkout's a single book order
	public function checkout(Request $request){
		$customer = auth("customer")->user();
    $book = Book::where('id', $request->bookId)->first();
		$order = [
			"quantity" => $request->quantity,
			"book" => $book
		];

		if (!$book) return validationError([ "failure" => "No book found with this id." ]);

		if ($request->quantity > $book->stocks) return validationError([ "failure" => "Quantity exceeds book's stock." ]);

		$response = paypalCreateOrder([$order], "checkoutSuccessTransaction", "checkoutCancelTransaction");
		
		if (isset($response['id']) && $response['id'] != null) {

			// Create the order
			$order = new Order();
			$order->customer_id = $customer->id;
			$order->paypal = $response["id"];
			$order->save();

			// Create the orderItem
			$orderItem = new OrderItem();
			$orderItem->order_id = $order->id;
			$orderItem->book_id = $book->id;
			$orderItem->quantity = $request->quantity;
			$orderItem->save();

			foreach ($response['links'] as $links) {
				if ($links['rel'] == 'approve') {
          return Inertia::location($links["href"]);
				}
			}
			return redirect("/books/{$book->id}")->with("success", "Success checking out. Thank you!");
		} 

		return validationError(["failure", "Server error. Please try again later."]);
	}

	// redirect for a successfull transaction
	public function checkoutSuccessTransaction(Request $request){
		$response = paypalCapturePaymentOrder($request);
		$foundOrder = Order::with('orderItems.book')->where('paypal', $request["token"])->first();
		$customer = authenticatedCustomer();
	
		if (!$foundOrder) return validationError(["failure", "Checkout unsuccessfully. Please try again."], "home");

		$bookId = $foundOrder->orderItems[0]->book->id;

		if (isset($response['status']) && $response['status'] == 'COMPLETED') {

			$bookIds = $foundOrder->orderItems->pluck('book_id')->toArray();
    
    	// Retrieve other users' carts that have the same book IDs
    	$otherCarts = Cart::where('customer_id', '!=', $customer->id)->whereHas('books', function ($query) use ($bookIds) {
    	    $query->whereIn('book_id', $bookIds);
    	})->get();

    	foreach ($otherCarts as $cart) {
    	  foreach ($cart->books as $book) {
    	    $orderItem = $foundOrder->orderItems->where('book_id', $book->id)->first();
				
    	    if ($orderItem) {
							$deduction = $book->stocks - $orderItem->quantity;
							$cart->quantity = ($deduction < $cart->quantity)? $deduction : (!$deduction? 0: $cart->quantity);

							if (!$deduction) $cart->outOfStocks = true;

							$cart->save();
    	    }
    	  }
    	}

			// deduct all quantity to the stocks
			foreach ($foundOrder->orderItems as $orderItem) {
				$book = $orderItem->book;
				$book->stocks = $book->stocks-$orderItem->quantity;
				$book->save();
			}

			$payer = $response["payer"]["name"];
			$address = (array) $response["purchase_units"][0]["shipping"]["address"];
			$foundOrder->completed = true;
			$foundOrder->address = join(", ", $address);
			$foundOrder->buyer = $payer["given_name"] ." " .($payer["middle_name"]??"") ." " .$payer["surname"];
			$foundOrder->save();

			return redirect("/books/{$bookId}")->with("success", "Checkout successfully. Thank you!");
		} 

		return validationError(["failure", "Checkout unsuccessfully. Please try again."], "/books/{$bookId}");
	}

	// redirect for cancellation of the paypal
	public function checkoutCancelTransaction(Request $request){
		$paypalToken = $request["token"];
		
		Order::where("paypal", $paypalToken)->delete();

		return redirect("books");
	}

	// checkout for the cart of the customer
	function checkoutCart() {
		$customer = authenticatedCustomer();
    $cart = $customer->carts()->with("books")->where("outOfStocks", "!=", 1)->get();
		$orders = array_map(fn ($cartItem) => [
			"quantity" => $cartItem["quantity"],
			"book" => $cartItem["books"][0]
		], $cart->toArray());

		foreach ($cart as $cartItem) {
			if ($cartItem->quantity > $cartItem->books[0]->stocks) return validationError(["failure", "Quantity exceeds book's stocks."]);
		}

		$response = paypalCreateOrder($orders, "cartCheckoutSuccessTransaction", "cartCheckoutCancelTransaction");
	
		if (isset($response['id']) && $response['id'] != null) {

		// Create the order
		$order = new Order();
		$order->customer_id = $customer->id;
		$order->paypal = $response["id"];
		$order->save();
	
		foreach ($cart as $cartItem) {
			// Create the orderItem
			$orderItem = new OrderItem();
			$orderItem->order_id = $order->id;
			$orderItem->book_id = $cartItem->books[0]->id;
			$orderItem->quantity = $cartItem->quantity;
			$orderItem->save();
		}

		foreach ($response['links'] as $links) {
			if ($links['rel'] == 'approve') return Inertia::location($links["href"]);
		}

			return redirect("cart")->with("success", "Success checking out. Thank you!");
		} 

		return validationError(["failure", "Server error. Please try again later."]);
	}

	// redirect for cancellation of the paypal
	public function cartCheckoutSuccessTransaction(Request $request){
		$response = paypalCapturePaymentOrder($request);
		$customer = authenticatedCustomer();
		$foundOrder = Order::with('orderItems.book')->where('paypal', $request["token"])->first();

		if (!$foundOrder) return validationError(["failure", "Checkout unsuccessfully. Please try again."], "cart");

		if (isset($response['status']) && $response['status'] == 'COMPLETED') {

			$bookIds = $foundOrder->orderItems->pluck('book_id')->toArray();
    
    	// Retrieve other users' carts that have the same book IDs
    	$otherCarts = Cart::where('customer_id', '!=', $customer->id)->whereHas('books', function ($query) use ($bookIds) {
    	    $query->whereIn('book_id', $bookIds);
    	})->get();

    	foreach ($otherCarts as $cart) {
    	  foreach ($cart->books as $book) {
    	    $orderItem = $foundOrder->orderItems->where('book_id', $book->id)->first();
				
    	    if ($orderItem) {
							$deduction = $book->stocks - $orderItem->quantity;
							$cart->quantity = ($deduction < $cart->quantity)? $deduction : (!$deduction? 0: $cart->quantity);

							if (!$deduction) $cart->outOfStocks = true;

							$cart->save();
    	    }
    	  }
    	}

			// deduct all quantity to the stocks
			foreach ($foundOrder->orderItems as $orderItem) {
				$book = $orderItem->book;
				$book->stocks -= $orderItem->quantity;
				$book->save();
			}

			Cart::where("customer_id", $customer->id)->where("outOfStocks", "!=", 1)->delete();
			$address = (array) $response["purchase_units"][0]["shipping"]["address"];
			$foundOrder->completed = true;
			$foundOrder->address = join(", ", $address);
			$foundOrder->save();

			return redirect("cart")->with("success", "Checkout successfully. Thank you!");
		} else {

			return validationError(["failure", "Checkout unsuccessfully. Please try again."], "cart");
		}
	}

	// redirect for cancellation of the paypal
	public function cartCheckoutCancelTransaction(Request $request){
		$paypalToken = $request["token"];
		
		Order::where("paypal", $paypalToken)->delete();
		
		return redirect("cart");
	}

}