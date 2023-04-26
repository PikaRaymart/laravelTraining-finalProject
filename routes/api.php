<?php

use App\Http\Controllers\Api\V1\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});


$v1ApiHelper = [
  "prefix" => "v1",
  "namespace" => "App\Http\Controllers\Api\V1",
  "middleware" => "auth:sanctum"
];

// Only use when creating tokens for admin and customers
Route::post('/admin/create', [AdminController::class, "createAdmin"]);

// Groups into using the version 1 of the api
Route::group($v1ApiHelper, function() {
  Route::middleware(["admin"])->group(function() {
    Route::apiResource("admin/books", AdminController::class);
    // Route::apiResource("customers")
  });
});