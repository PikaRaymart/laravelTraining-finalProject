<?php

use App\Http\Controllers\Web\PageController;
use App\Http\Controllers\Web\PayPalController;
use App\Http\Controllers\Web\AdminController;
use App\Http\Controllers\Web\BookController;
use App\Http\Controllers\Web\CartController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Pages
Route::controller(PageController::class)->group(function() {
	Route::get("/", "home")->name("home");
});

// Admin routes
Route::middleware(["auth:sanctum", "admin"])->group(function() {
	Route::controller(AdminController::class)->group(function() {
		Route::get("/admin", "index")->name("admin");
	});
	Route::controller(BookController::class)->group(function() {
		Route::get("/books/create", "create")->name("create-book");

		Route::post("/books/store", "store")->name("store-book");

		Route::get("/books/edit/{book}", "edit")->name("edit-book");

		Route::post("/books/update/{book}", "update")->name("update-book");

		Route::delete("/books/delete/bulk", "deleteBulk")->name("delete-books");
	});
});

// Default
Route::controller(BookController::class)->group(function() {
	Route::get("/books", "index")->name("books");

	Route::get("/books/{book}", "show")->name("show-book");
});

Route::middleware("auth:customer")->group(function() {
	Route::controller(CartController::class)->group(function() {
		Route::get("/cart", "index")->name("cart");

		Route::put("/cart", "update")->name("update-cart");

		Route::post("/cart", "store")->name("store-cart");
	});
});

// Paypal routes
Route::middleware("auth:customer")->group(function() {
	Route::controller(PayPalController::class)->group(function() {
		Route::post("/checkout", "checkout")->name("checkout");

		Route::get("/checkout/success-transaction", "checkoutSuccessTransaction")->name("checkoutSuccessTransaction");

		Route::get("/checkout/cancel-transaction", "checkoutCancelTransaction")->name("checkoutCancelTransaction");

		Route::get("/checkout/cart", "checkoutCart")->name("cart-checkout");

		Route::get("/checkout/cart/success-transaction", "cartCheckoutSuccessTransaction")->name("cartCheckoutSuccessTransaction");

		Route::get("/checkout/cart/cancel-transaction", "cartCheckoutCancelTransaction")->name("cartCheckoutCancelTransaction");
	});
});

require __DIR__.'/auth.php';
