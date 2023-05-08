<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

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

	public function authenticate(){
		$credentials = $this->only("email", "password");
		$loginData = [
			"message" => "",
			"token" => ""
		];
		
		if ($credentials["email"]==="admin@admin.com" && auth()->attempt($credentials)) {
      $user = authenticatedUser();      
      $adminToken = $user->createToken("admin-token", ["admin"]);
			$loginData["message"] = "Successfully logged in.";
			$loginData["token"] = $adminToken->plainTextToken;
    } else {
      if (Auth::guard("customer")->attempt($credentials)) {
        $user = authenticatedCustomer();
        $customerToken = $user->createToken("customer-token", ["customer"]);
				$loginData["message"] = "Successfully logged in.";
				$loginData["token"] = $customerToken->plainTextToken;
      }
    }

		return $loginData;
	}
}
