<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Web\BookCollection;
use App\Http\Resources\Web\BookResource;
use App\Http\Resources\Web\CartBookCollection;
use App\Models\Book;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PayPalController extends Controller{

	// checkout's a single book order
	public function checkout(Request $request){
		$customer = auth("customer")->user();
    $book = Book::where('id', $request->bookId)->first();
		$order = [
			"quantity" => $request->quantity,
			"book" => $book
		];

		if (!$book) return redirect("/books/{$book->id}")->withErrors([ "error" => "No book found with this id." ]);

		if ($request->quantity > $book->stocks) return redirect("/books/{$book->id}")->withErrors([ "error" => "Quantity exceeds book's stock." ]);

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

		return redirect("/books/{$book->id}")->with("failure", "Server error. Please try again later.");
	}

	// redirect for a successfull transaction
	public function checkoutSuccessTransaction(Request $request){
		$response = paypalCapturePaymentOrder($request);
		$foundOrder = Order::with('orderItems.book')->where('paypal', $request["token"])->first();

		if (!$foundOrder) return redirect("cart")->with("failure", "Checkout unsuccessfully. Please try again.");

		if (isset($response['status']) && $response['status'] == 'COMPLETED') {

			foreach ($foundOrder->orderItems as $orderItem) {
				$book = $orderItem->book;
				// Access other properties of the book or perform operations
				$book->stocks = $book->stocks-$orderItem->quantity;
				$book->save();
			}

			$foundOrder->completed = true;
			$foundOrder->save();

			return redirect("/books/{$foundOrder->orderItems[0]->book->id}")->with("success", "Checkout successfully. Thank you!");
		} 

		return redirect("/books/{$foundOrder->orderItems[0]->book->id}")->with("failure", "Checkout unsuccessfully. Please try again.");
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
    $cart = $customer->carts()->with("books")->get()->toArray();
		$orders = array_map(fn ($cart) => [
			"quantity" => $cart["quantity"],
			"book" => $cart["books"][0]
		], $cart);
		$response = paypalCreateOrder($orders, "cartCheckoutSuccessTransaction", "cartCheckoutCancelTransaction");

		if (isset($response['id']) && $response['id'] != null) {
			foreach ($response['links'] as $links) {
				if ($links['rel'] == 'approve') {
          return Inertia::location($links["href"]);
				}
			}
			return redirect("cart")->with("success", "Success");
		} else {
			return redirect("cart")->with("success", "Success");
		}
	}

	// redirect for cancellation of the paypal
	public function cartCheckoutSuccessTransaction(Request $request){
		$response = paypalCapturePaymentOrder($request);
		$customer = authenticatedCustomer();
    $cart = $customer->carts()->with("books")->get();
		$foundOrder = Order::where("paypal", $response["id"])->first();

		if (!$foundOrder) return redirect("cart")->with("failure", "Checkout unsuccessfully. Please try again.");

		if (isset($response['status']) && $response['status'] == 'COMPLETED') {

			// // check first if cart quantity overflows the book stocks
			// foreach ($cart as $cartItem) {
			// 	$book = Book::findOrFail($cartItem->books[0]->id);

			// 	if ($cartItem->quantity > $book->stocks) {
			// 		return redirect("cart")->with("failure", "Book quantity overflows the original stocks. Check your cart.");
			// 	}
			// }

			// // deduct all the cart quantity for each of the book
			// foreach ($cart as $cartItem) {
			// 	$book = Book::findOrFail($cartItem->books[0]->id);
			// 	$book->stocks -= $cartItem->quantity;
			// 	$book->save();
			// }

			// Cart::where("customer_id", $customer->id)->delete();

			return redirect("cart")->with("success", "Checkout successfully. Thank you!");
		} else {

			return redirect("cart")->with("failure", "Checkout unsuccessfully. Please try again.");
		}
	}

	// redirect for cancellation of the paypal
	public function cartCheckoutCancelTransaction(Request $request){
		return redirect()->route("cart");
	}

}