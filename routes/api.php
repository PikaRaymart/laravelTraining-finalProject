<?php

use App\Http\Controllers\Api\V1\AdminController;
use App\Http\Controllers\Api\V1\LoginUserController;
use App\Http\Controllers\Api\V1\CartController;
use App\Http\Controllers\Api\V1\CheckoutController;
use App\Http\Controllers\Api\V1\RegisterCustomerController;
use App\Http\Controllers\Api\V1\BookController;
use Illuminate\Support\Facades\Route;


$v1ApiHelper = [
  "prefix" => "v1",
  "namespace" => "App\Http\Controllers\Api\V1",
];

// Only use when creating account for admin with tokens
Route::post('/v1/admin', [AdminController::class, "store"]);

// Groups into using the version 1 of the api
Route::group($v1ApiHelper, function() {
  // Handles registration for customers
  Route::controller(RegisterCustomerController::class)->group(function() {
    Route::post("register", "store");
  });

  // Handles login for customers and admin
  Route::controller(LoginUserController::class)->group(function() {
    Route::post("login", "store");
  });

  // Handles the admin 
  Route::middleware(["auth:sanctum", "admin"])->group(function() {
    Route::controller(BookController::class)->group(function(){
      Route::put("books/{book}", "update");
      Route::delete("books/delete/bulk", "deleteBulk");
    });
    Route::apiResource("admin", AdminController::class);
    Route::apiResource("books", BookController::class);
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

  Route::controller(BookController::class)->group(function(){
    Route::get("books", "index");
    Route::get("books/{book}", "show");
  });
});