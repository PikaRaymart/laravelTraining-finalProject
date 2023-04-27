<?php

use App\Http\Controllers\Api\V1\AdminController;
use App\Http\Controllers\Api\V1\BookController;
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
Route::post('/v1/admin/store', [AdminController::class, "store"]);

// Groups into using the version 1 of the api
Route::group($v1ApiHelper, function() {
  Route::middleware(["auth:sanctum", "admin"])->group(function() {
    Route::put("admin/books/{book}", [BookController::class, "update"]);
    Route::delete("admin/books/bulk", [BookController::class, "bulkDestroy"]);
    Route::delete("admin/books/{book}", [BookController::class, "destroy"]);
    Route::apiResource("admin/books", BookController::class);
  });
});