<?php

use App\Http\Controllers\PayPalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\AdminController;
use App\Http\Controllers\Web\BookController;
use Illuminate\Foundation\Application;
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

Route::get('/', function () {
	$adminAuth = auth()->user();
	$customerAuth = auth("customer")->user();

	return Inertia::render("Home", [
		"auth" => [
			"user" => $adminAuth?? $customerAuth,
			"type" => $adminAuth? "admin" : "customer"
		]
		]);
})->name("home");

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
	});
});

// Default
Route::get("/books", function() {
	
	return Inertia::render("Books");
})->name("books");

Route::get('/dashboard', function () {
	return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/home", fn() => Inertia::render("Home/index"));

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('create-transaction', [PayPalController::class, 'createTransaction'])->name('createTransaction');
Route::get('process-transaction', [PayPalController::class, 'processTransaction'])->name('processTransaction');
Route::get('success-transaction', [PayPalController::class, 'successTransaction'])->name('successTransaction');
Route::get('cancel-transaction', [PayPalController::class, 'cancelTransaction'])->name('cancelTransaction');

require __DIR__.'/auth.php';
