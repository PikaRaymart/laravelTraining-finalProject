<?php

use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Web\RegisterCustomerController;
use Illuminate\Support\Facades\Route;

Route::middleware(["guest", "guest:customer", "guest:admin"])->group(function () {
	Route::get('register', [RegisterCustomerController::class, 'create'])->name('register');

	Route::post('register', [RegisterCustomerController::class, 'store']);

	Route::get('login', [LoginUserController::class, 'create'])->name('login');

	Route::post('login', [LoginUserController::class, 'store']);
});

Route::middleware("auth:customer")->group(function () {
	Route::post('logout', [LoginUserController::class, 'destroy'])->name('logout');
});

Route::middleware("auth:web")->group(function() {
	Route::post('admin/logout', [LoginUserController::class, 'destroy'])->name('admin-logout');
});