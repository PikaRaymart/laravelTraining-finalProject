<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Web\BookCollection;
use App\Http\Resources\Web\BookResource;
use App\Http\Resources\Web\CartBookCollection;
use App\Models\Book;
use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PayPalController extends Controller{

	// showing the paypal ui
	public function checkout(Request $request){
    $book = Book::where('id', $request->bookId)->first();
		$order = [
			"quantity" => $request->quantity,
			"book" => $book
		];

		if (!$book) return redirect("/books/{$book->id}")->withErrors([ "error" => "No book found with this id." ]);

		if ($request->quantity > $book->stocks) return redirect("/books/{$book->id}")->withErrors([ "error" => "Quantity exceeds book's stock." ]);

		$response = paypalCreateOrder([$order], "checkoutSuccessTransaction", "checkoutCancelTransaction");
	
		if (isset($response['id']) && $response['id'] != null) {
			foreach ($response['links'] as $links) {
				if ($links['rel'] == 'approve') {
          return Inertia::location($links["href"]);
				}
			}
			return redirect("/books/{$book->id}")->with("success", "Success");
		} else {
			return redirect("/books/{$book->id}")->with("success", "Success");
		}
	}

	function checkoutCart() {
		$customer = authenticatedCustomer();
    $cart = $customer->carts()->with("books")->get()->toArray();
		$orders = array_map(fn ($cart) => [
			"quantity" => $cart["quantity"],
			"book" => $cart["books"][0]
		], $cart);
		$response = paypalCreateOrder($orders, "checkoutSuccessTransaction", "checkoutCancelTransaction");
		dd($response);

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

	// redirect for a successfull transaction
	public function checkoutSuccessTransaction(Request $request){
		$provider = new PayPalClient;
		$provider->setApiCredentials(config('paypal'));
		$provider->getAccessToken();
		$response = $provider->capturePaymentOrder($request['token']);
		$customer = authenticatedCustomer();
    $cart = $customer->carts()->with("books")->get();

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
	public function checkoutCancelTransaction(Request $request){
		return redirect()->route("cart");
	}
}