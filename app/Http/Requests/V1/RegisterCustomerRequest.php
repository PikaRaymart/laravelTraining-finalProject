<?php

namespace App\Http\Requests\V1;

use App\Models\Customer;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterCustomerRequest extends FormRequest{
	
  function authorize(): bool{
		return true;
	}

	function rules(): array{
    $rules = [
      "name" => "required|string",
      "email" => ["required", Rule::unique("customers", "email")],
      "password" => "required|confirmed"
    ];
		
    return $rules;
	}

  function registerAndLogin() {
    $customerData = [
      "name" => $this->name,
      "email" => $this->email,
      "password" => bcrypt($this->password)
    ];
    $newUser = Customer::create($customerData);

    auth("customer")->login($newUser);
    $customer = authenticatedCustomer();

    return response()->json([
      "message" => "Successfully created account. Logging in.",
      "token" => $customer->createToken("customer-token", ["customer"])->plainTextToken
    ]);
  }
}
