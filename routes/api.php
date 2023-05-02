<?php

use App\Http\Controllers\Api\V1\AdminBookController;
use App\Http\Controllers\Api\V1\AdminController;
use App\Http\Controllers\Api\V1\LoginUserController;
use App\Http\Controllers\Api\V1\CartController;
use App\Http\Controllers\Api\V1\CheckoutController;
use App\Http\Controllers\Api\V1\RegisterCustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});


$v1ApiHelper = [
  "prefix" => "v1",
  "namespace" => "App\Http\Controllers\Api\V1",
];

// Only use when creating account for admin with tokens
Route::post('/v1/admin', [AdminController::class, "store"]);

// Handles registration for customers
Route::controller(RegisterCustomerController::class)->group(function() {
  Route::post("/v1/register", "store");
});

// Handles login for customers and admin
Route::controller(LoginUserController::class)->group(function() {
  Route::post("/v1/login", "store");
});

// Groups into using the version 1 of the api
Route::group($v1ApiHelper, function() {
  // Handles the admin 
  Route::middleware(["auth:sanctum", "admin"])->group(function() {
    Route::put("admin/books/{book}", [AdminBookController::class, "update"]);
    Route::delete("admin/books/bulk", [AdminBookController::class, "bulkDestroy"]);
    Route::delete("admin/books/{book}", [AdminBookController::class, "destroy"]);
    Route::apiResource("admin/books", AdminBookController::class);
  });

  // Handles the customer
  Route::middleware(["auth:sanctum", "customer"])->group(function() {
    Route::put("/cart", [CartController::class, "update"]);
    Route::apiResource("cart", CartController::class);
  });

  Route::middleware(["auth:sanctum", "customer"])->group(function() {
    Route::post("/checkout/cart", [CheckoutController::class, "cartCheckout"]);
    Route::apiResource("checkout", CheckoutController::class);
  });
});