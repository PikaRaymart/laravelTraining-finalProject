<?php

namespace App\Http\Requests\Web;

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
      "password" => "required|confirmed|min:6"
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

    return redirect("/");
  }
}
