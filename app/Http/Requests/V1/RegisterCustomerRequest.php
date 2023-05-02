<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterCustomerRequest extends FormRequest{
	public function authorize(): bool{
		return true;
	}


	public function rules(): array{
    $rules = [
      "name" => "required|string",
      "email" => ["required", Rule::unique("customers", "email")],
      "password" => "required|confirmed"
    ];
		
    return $rules;
	}
}
