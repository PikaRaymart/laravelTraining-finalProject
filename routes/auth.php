<?php

use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Web\RegisterCustomerController;
use Illuminate\Support\Facades\Route;

Route::middleware(["guest", "guest:customer", "guest:admin"])->group(function () {
	Route::get('register', [RegisterCustomerController::class, 'create'])->name('register');

	Route::post('register', [RegisterCustomerController::class, 'store']);

	Route::get('login', [LoginUserController::class, 'create'])->name('login');

	Route::post('login', [LoginUserController::class, 'store']);

	Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');

	Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');

	Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');

	Route::post('reset-password', [NewPasswordController::class, 'store'])->name('password.store');
});

Route::middleware("auth:customer")->group(function () {
	Route::get('verify-email', EmailVerificationPromptController::class)->name('verification.notice');

	Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
		->middleware(['signed', 'throttle:6,1'])
		->name('verification.verify');

	Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
		->middleware('throttle:6,1')
		->name('verification.send');

	Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])->name('password.confirm');

	Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

	Route::put('password', [PasswordController::class, 'update'])->name('password.update');

	Route::post('logout', [LoginUserController::class, 'destroy'])->name('logout');
});

Route::middleware("auth:web")->group(function() {
	Route::post('admin/logout', [LoginUserController::class, 'destroy'])->name('admin-logout');
});