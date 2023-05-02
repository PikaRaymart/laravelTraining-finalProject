<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginUserRequest extends FormRequest{
	public function authorize(): bool{
		return true;
	}

	public function rules(): array{
    $rules = [
      "email" => "required|string|email",
      "password" => "required|string"
    ];

		return $rules;
	}

	public function authenticate(): void{
		$this->ensureIsNotRateLimited();
    
		if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
			RateLimiter::hit($this->throttleKey());

			throw ValidationException::withMessages([
				'email' => trans('auth.failed'),
			]);
		}

		RateLimiter::clear($this->throttleKey());
		$credentials = $this->all();

		// Start
		if ($credentials["email"]==="admin@admin.com" && auth()->attempt($credentials)) {
      $user = auth()->user();
      
      if (!($user instanceof User)) return response()->json(["message" =>"Server error"]);

      $adminToken = $user->createToken("admin-token", ["admin"]);

      return response()->json([
        "message" => "Sucessfully logged in.",
        "token" => $adminToken->plainTextToken
      ]);
    } else {
      if (Auth::guard("customer")->attempt($credentials)) {
        $user = authenticatedCustomer();
        $customerToken = $user->createToken("customer-token", ["customer"]);

        return response()->json([
          "message" => "Successfully logged in.",
          "token" => $customerToken->plainTextToken
        ]);
      }
    }

	}

	public function ensureIsNotRateLimited(): void{

		if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) return;

		event(new Lockout($this));

		$seconds = RateLimiter::availableIn($this->throttleKey());

		throw ValidationException::withMessages([
			'email' => trans('auth.throttle', [
				'seconds' => $seconds,
				'minutes' => ceil($seconds / 60),
			]),
		]);
	}

	public function throttleKey(): string{
		return Str::transliterate(Str::lower($this->input('email')).'|'.$this->ip());
	}
}
