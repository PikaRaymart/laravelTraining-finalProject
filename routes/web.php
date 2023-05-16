<?php

use App\Http\Controllers\Web\PageController;
use App\Http\Controllers\Web\PayPalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\AdminController;
use App\Http\Controllers\Web\BookController;
use App\Http\Controllers\Web\CartController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

Route::controller(PageController::class)->group(function() {
	Route::get("/", "home")->name("home");
});

// Default
Route::controller(BookController::class)->group(function() {
	Route::get("/books", "index")->name("books");
	Route::get("/books/{book}", "show")->name("show-book");
});

// Admin routes
Route::middleware(["auth:sanctum", "admin"])->group(function() {
	Route::controller(AdminController::class)->group(function() {
		Route::get("/admin", "index")->name("admin");
	});
	Route::controller(BookController::class)->group(function() {
		Route::get("/admin/create", "create")->name("create-book");
		Route::post("/admin/store", "store")->name("store-book");
		Route::get("/admin/edit/{book}", "edit")->name("edit-book");
		Route::post("/admin/update/{book}", "update")->name("update-book");
		Route::delete("/admin/delete/bulk", "deleteBulk")->name("delete-books");
	});
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

Route::get('/dashboard', function () {
	return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/home", fn() => Inertia::render("Home/index"));

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
