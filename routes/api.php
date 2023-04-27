<?php

use App\Http\Controllers\Api\V1\AdminBookController;
use App\Http\Controllers\Api\V1\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

// Handles both authentication for customers and admin
Route::controller(AuthController::class)->group(function() {
  Route::post("/register", "register");
  Route::post("/login", "login");
});

// Groups into using the version 1 of the api
Route::group($v1ApiHelper, function() {
  Route::middleware(["auth:sanctum", "admin"])->group(function() {
    Route::put("admin/books/{book}", [AdminBookController::class, "update"]);
    Route::delete("admin/books/bulk", [AdminBookController::class, "bulkDestroy"]);
    Route::delete("admin/books/{book}", [AdminBookController::class, "destroy"]);
    Route::apiResource("admin/books", AdminBookController::class);
  });
});